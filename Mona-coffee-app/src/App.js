import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { start } from "./actions/index";
import { useDispatch } from "react-redux";
function App() {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const inputLocalStorage = localStorage.getItem("user");
  //  if (user === "" && inputLocalStorage != "") {
  //   dispatch(start(inputLocalStorage));
  // }
  //inputLocalStorage={inputLocalStorage}
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
