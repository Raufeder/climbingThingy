import React, { useState } from "react";
import APIURL from "../helpers/Environment";

const Account = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      Account Info Here
    </div>
  );
};

export default Account;