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
    <form>
      
      <label>Email</label>
      <input className="loginInput" name="loginEmail" placeholder="Insert email" required></input>

      <label>Password</label>
      <input className="loginInput" name="loginPassword" placeholder="Insert password" required></input>

      <button type="submit" className="login_button" >Login</button>
    </form>
   </div>
  </>
  )
}
