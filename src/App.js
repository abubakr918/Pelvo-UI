import React, { useEffect } from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/currency-flags.min.css";
import "./assets/css/helper.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { GetCountries } from "./redux/actions/auth.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCountries());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
