import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import APIURL from "../helpers/Environment";
import axios from "axios";

interface Props {}

const Register: React.FC<Props> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const registerSubmit = async () => {
    if (confirmPassword !== password) {
      setPasswordError(true);
    } else {
      try {
        const payload = {
          user: {
            username: username,
            email: email,
            password: password,
          },
        };
        console.log("payload", payload);
        const res = await axios.post(`${APIURL}user/register`, payload);
        console.log(res.data);
        setPasswordError(false);
      } catch (e) {
        setPasswordError(false);
        console.log("error from register", e);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      Register Here
      <div className="my-3">E-Mail:</div>
      <Input
        type="text"
        placeholder="E-mail"
        inputValue={email}
        setInputValue={(value) => setEmail(value)}
        disabled={false}
      />
      <div className="my-3">Screen Name:</div>
      <Input
        type="text"
        placeholder="Screen Name"
        inputValue={username}
        setInputValue={(value) => setUsername(value)}
        disabled={false}
      />
      <div className="my-3">Password:</div>
      <Input
        type="password"
        placeholder="Password"
        inputValue={password}
        setInputValue={(value) => setPassword(value)}
        disabled={false}
      />
      {passwordError && <div>Passwords Must Match</div>}
      <div className="my-3">Confirm Password:</div>
      <Input
        type="password"
        placeholder="Confirm Password"
        inputValue={confirmPassword}
        setInputValue={(value) => setConfirmPassword(value)}
        disabled={false}
      />
      <div>
        <Button
          text="Click Me"
          handleClick={() => registerSubmit()}
          outline={true}
        />
      </div>
    </div>
  );
};

export default Register;
