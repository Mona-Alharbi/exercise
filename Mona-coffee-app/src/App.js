import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Registration user={user} />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
