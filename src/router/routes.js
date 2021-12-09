import React, { useContext } from "react";
import { Switch, Route} from "react-router-dom";
import NumberCountCardGroup from "../pages/NumberCountCardGroup";
import NumberCountChart from "../pages/NumberCountChart";
import {AppContext} from "../contexts";
import Loading from "../pages/Loading";


function CustomRoute({ ...props }) {
  const {isLoading} = useContext(AppContext);

  if (isLoading) {
    return <Loading/>;
  }
  return <Route {...props} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/">
        <NumberCountCardGroup/>
      </CustomRoute>
      <CustomRoute exact path="/chart">
        <NumberCountChart/>
      </CustomRoute>
    </Switch>
  );
}
