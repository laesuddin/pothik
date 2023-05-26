import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../feature/auth/authApi";
import { useNavigate } from "react-router";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseError, setResponseError] = useState("");
  const [login,{data,isLoading,error}] =useLoginMutation()

  const navigate=useNavigate()

  useEffect(() => {

    if(error?.data){
      setResponseError(error.data)
    }
    if(data?.user && data.accessToken){
      navigate("/")
    }

  }, [data,navigate,setResponseError,error ]);


  const loginHandle=(e) =>{
    e.preventDefault()
    setResponseError("")
    login({
      email,
      password
    })


  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={loginHandle}>
        <input type="email" placeholder="Enter Email" className="" value={email} onChange={(e) => setEmail(e.target.value)} required/> <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}required
        />{" "}
        <br />
        <div class="clearfix">
          <button type="submit" className="button">Log In</button>
        </div>
      </form>
        <div>{responseError}</div>
    
    </div>
  );
}

export default Login;
