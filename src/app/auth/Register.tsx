import React, { useState } from "react";
import Input from "../components/Input";
import APIURL from "../helpers/Environment";

interface Props {}

const Register: React.FC<Props> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      Register Here
      <Input
        type="text"
        placeholder="E-mail"
        inputValue={email}
        setInputValue={(value) => setEmail(value)}
        disabled={false}
      />
    </div>
  );
};

export default Register;
