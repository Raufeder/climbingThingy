import React, { useState } from "react";
import APIURL from "../helpers/Environment";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      Register Here
    </div>
  );
};

export default Register;