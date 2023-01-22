import "./Register.css"

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        
        <span className="title">Register</span>
        <input placeholder="username" className="registerInput"></input>
        <input placeholder="email" className="registerInput"></input>
        <input placeholder="Description" className="registerInput"></input>
        <input placeholder="Password" className="registerInput"></input>
        <input placeholder="Retype Password" className="registerInput"></input>
        <button className="registerButton">Register</button>
        <span className="text">Already Have an Account? Login</span>
        
      </div>
    </div>
  )
}

export default Register
