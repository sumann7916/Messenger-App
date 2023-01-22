import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        
        <span className="title">Sign In</span>
        <input placeholder="Email" className="loginInput"></input>
        <input placeholder="Password" className="loginInput"></input>
        <span className="loginForgot" >Forgot Password?</span>
        <button className="loginButton">Log In</button>
        <span className="text">Not Registered Yet? Regsiter</span>
      </div>
    </div>
  )
}

export default Login
