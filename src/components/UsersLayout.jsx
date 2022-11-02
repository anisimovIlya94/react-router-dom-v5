import React from "react";
import UsersListPage from "./UsersListPage";
import UserLayout from "./UserLayout";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

const UsersLayout = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <h1>UsersLayout</h1>
      <NavLink exact to="/">
        Main Page
      </NavLink>
      <Switch>
        <Route exact path={path} component={UsersListPage} />
        <Route path={path + "/:userId?"} component={UserLayout} />
      </Switch>
    </div>
  );
};

export default UsersLayout;
