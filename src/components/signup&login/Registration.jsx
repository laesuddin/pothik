import React, { useEffect, useState } from "react";
import { useRegisterMutation} from "../../feature/auth/authApi";
import { useNavigate } from "react-router";
import "./login.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseError, setResponseError] = useState("");
  const [register, { data, isLoading, error }] = useRegisterMutation();
  const navigate=useNavigate()

  useEffect(() => {

    if(error?.data){
      setResponseError(error.data)
    }
    if(data?.user && data.accessToken){
      navigate("/")
    }

  }, [data,navigate,setResponseError,error ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseError("");
    if (password !== confirmPassword) {
      setResponseError("Password Doesn't Match");
    } else {
      const data = {
        name,
        email,
        password,
      };
      register(data);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="confirm password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="button" disabled={isLoading}>Sign Up</button>
      </form>
      {<div>{responseError}</div>}
    </div>
  );
}

export default Registration;
