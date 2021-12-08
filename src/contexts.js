import React from "react";


const NumbersCountContext = React.createContext({
  NUMBERS_COUNT_DEFAULT: [],
  numbersCount: { list: [], },
  setNumbersCount: () => {},
  incrementNumberCountAt: () => {},
  resetNumbersCount: () => {},
});
const AppContext = React.createContext({
  isLoading: true,
  setIsLoading: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
});

export {
  NumbersCountContext,
  AppContext,
};
