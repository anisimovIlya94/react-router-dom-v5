import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import UsersLayout from "./components/UsersLayout";

function App() {
  return (
    <div className="App">
      <h1>React-router-dom v5</h1>
      <h1>App Layout</h1>
      <NavLink exact to="/users">
        Users List Page
      </NavLink>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/users" component={UsersLayout} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
