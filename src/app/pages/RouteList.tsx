import React, { useState } from "react";
import APIURL from "../helpers/Environment";

const RouteList = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      List of Routes Here
    </div>
  );
};

export default RouteList;