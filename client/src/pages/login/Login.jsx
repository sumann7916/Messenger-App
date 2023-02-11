import { useContext } from "react";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import "./login.css"
import {AuthContext} from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';



const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

   
  const handleClick = (e) =>{
    e.preventDefault();
    loginCall(
      {email:email.current.value,password: password.current.value}, 
      dispatch
      );
  };

  console.log(user);
  
  return (
    <div className="login">
      <form className="loginWrapper" onSubmit={handleClick}>
        
        <span className="title">Sign In</span>
        <input placeholder="Email" type="email" required className="loginInput"  ref={email}></input>
        <input placeholder="Password" type="password" required className="loginInput"  ref={password}></input>
        <span className="loginForgot" >Forgot Password?</span>
        <button className="loginButton" type="submit">
          {isFetching ? <CircularProgress/>: "Log In"}
        </button>
        <span className="text">Not Registered Yet? Regsiter</span>
      </form>
    </div>
  )
}

export default Login
