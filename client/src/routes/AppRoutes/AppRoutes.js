import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Logout from "../../components/Logout/Logout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import Signup from "../../pages/Signup/Signup";

import { useSelector } from "react-redux";

function AppRoutes() {
  const authenticated = useSelector((state) => state.user.authenticated);

  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <ProtectedRoute
        authenticated={authenticated}
        exact
        path="/logout"
        component={Logout}
      />
      <ProtectedRoute
        authenticated={authenticated}
        exact
        path="/main"
        component={Main}
      />
      <ProtectedRoute
        authenticated={authenticated}
        exact
        path="/user-profile"
        component={Main}
      />
    </Switch>
  );
}

const ProtectedRoute = ({ authenticated, ...props }) => {
  if (authenticated) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

export default AppRoutes;
