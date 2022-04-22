import { Link } from "react-router-dom"
//import {checkUser} from ../services/userService.js

export default function LoginPage() {
  
  //call the checkUser on form submit


  return (
    <>
    <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
  <div className='basket_header'>
    <h1>Login</h1>
  </div>
  <div className="loginFormContainer">
    <form className="loginForm">
      <div className="loginInputWrapper">
        <label>Email</label>
        <input className="loginInput" name="loginEmail" placeholder="Insert email" required></input>
      </div>
      <div className="loginInputWrapper">
        <label>Password</label>
        <input className="loginInput" name="loginPassword" placeholder="Insert password" required></input>
      </div>
      <div className="login_newUser_buttons">
        <button type="submit" className="login_basket" >Login</button>
        <Link to="/register"><button className="login_basket" >New user?</button></Link>
      </div>
    </form>
   </div>
  </>
  )
}
