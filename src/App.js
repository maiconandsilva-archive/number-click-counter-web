import React, {useEffect, useState} from "react";
import {Container, Row} from "reactstrap";
import {BrowserRouter} from "react-router-dom";
import {AppContext, NumbersCountContext} from "./contexts";
import Header from "./components/Header";
import Routes from "./router/routes";
import api from "./services/api";
import _ from "lodash";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const NUMBERS_COUNT_DEFAULT = [];
  const MAX_ALLOWED_NUM = 9;
  const MIN_ALLOWED_NUM = 1;
  for (let index = MAX_ALLOWED_NUM; index >= MIN_ALLOWED_NUM; index--) {
    NUMBERS_COUNT_DEFAULT.push({ number: index, count: 0 });
  }

  let [numbersCount, setNumbersCount] = useState({
    list: NUMBERS_COUNT_DEFAULT,
  });

  useEffect(() => {
    (async () => {
      await list();
    })()
  }, []);

  /**
   * TODO: Separate functions into hooks and components
   */
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const waitLoading = (func) => {
    return async function(...args) {
      setIsLoading(true);
      try {
        const result = await func(...args);
        setIsLoading(false);
        return result;
      } catch (e) {
        setIsLoading(false);
        throw e;
      }
    };
  }

  const handleErrors = (func) => {
    return async function(...args) {
      try {
        return await func(...args);
      } catch (e) {
        console.log(e);
        setErrorMessage("An unexpected error occurred. Try again later.");
      }
    };
  }

  const list = handleErrors(waitLoading(async () => {
    const {data: { counters }} = await api.get("/list");

    setNumbersCount({
      list: numbersCount.list.map((numCountState) => {
        const counter = counters.find(
          (counter) => counter.number === numCountState.number);
        return _.merge(numCountState, counter);
      }),
    });
  }));

  const incrementNumberCountAt = handleErrors(waitLoading(async (index) => {
    const {data} = await api.post(`/save/${numbersCount.list[index].number}`);
    numbersCount.list[index] = data;
    setNumbersCount({
      list: numbersCount.list,
    });
  }));

  const resetNumbersCount = handleErrors(waitLoading(async () => {
    await api.post("/reset");
    setNumbersCount({
      list: NUMBERS_COUNT_DEFAULT,
    });
  }));

  return (
    <AppContext.Provider value={{
      isLoading,
      setIsLoading,
      errorMessage,
      setErrorMessage
    }}>
      <NumbersCountContext.Provider value={{
        NUMBERS_COUNT_DEFAULT,
        numbersCount,
        setNumbersCount,
        incrementNumberCountAt,
        resetNumbersCount,
      }}>
        <BrowserRouter>
          <Header />
          <ErrorMessage/>
          <Container>
            <Row><Routes/></Row>
          </Container>
        </BrowserRouter>
      </NumbersCountContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
