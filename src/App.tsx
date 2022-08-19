import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import "./App.css";
import RouteList from "./app/pages/RouteList";
import Account from "./app/auth/Account";
import AddRoute from "./app/pages/AddRoute";
import UserList from "./app/auth/UserList";

const App: React.FC = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [activeUsername, setActiveUsername] = useState("");
  // const [activeId, setActiveId] = useState(0);
  // const [activeRouteId, setActiveRouteId] = useState(null);
  // const [admin, setAdmin] = useState(false);
  // const [token, setToken] = useState("");
  // const [accountInfo, setAccountInfo] = useState({});

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/user/login">
          <Login />
        </Route>
        <Route exact path="/user/register">
          <Register />
        </Route>
        <Route exact path="/routes">
          <RouteList />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/admin/add/route">
          <AddRoute />
        </Route>
        <Route exact path="/admin/userlist">
          <UserList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
