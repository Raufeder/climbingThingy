import React, { useState } from "react";
import APIURL from "../helpers/Environment";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      Login Here
    </div>
  );
};

export default Login;