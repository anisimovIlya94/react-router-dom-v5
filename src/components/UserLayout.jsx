import React from "react";
import UserPage from "./UserPage";
import EditUserPage from "./EditUserPage";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

const UserLayout = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path + "/profile"} component={UserPage} />
        <Route path={path + "/edit"} component={EditUserPage} />
        <Redirect to={path + "/profile"} />
        <Redirect from="*" to={path + "/profile"} />
      </Switch>
    </div>
  );
};

export default UserLayout;
