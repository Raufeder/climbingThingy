import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar";
import Login from "./app/auth/Login";
import './App.css';

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
        <Navbar/>
        <Switch>
          <Route exact path="/user/login">
          <Login/>
          </Route>
          </Switch>
        {/* <Route path="/user/login">
            <Login/>
          </Route> */}
    </BrowserRouter>
  );
}

export default App;
