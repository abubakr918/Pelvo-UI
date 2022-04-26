import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardBusiness from "./dashboard/dashboard.business";
import AuthBoarding from "./modules/OnBoarding/index";
import AuthForm from "./modules/OnBoarding/form/auth-form";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AuthBoarding} />
        <Route
          exact
          path="/dashboard/transaction"
          component={DashboardBusiness}
        />

        {/******** On Boarding Routes *********/}
        <Route exact path="/auth/form" component={AuthForm} />
      </Switch>
    </div>
  );
};
export default MainRouter;

