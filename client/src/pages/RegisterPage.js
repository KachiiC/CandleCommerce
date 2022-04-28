import { Link, useHistory } from "react-router-dom"
import { Targeter } from "../helpers";
import { createUser } from "../services/userService";

const RegisterPage = () => {

  const history = useHistory();

  const newUser = e => {
    e.preventDefault();
    const userCheck = {
      email: Targeter(e, "registerEmail"),
      password: Targeter(e, "registerPassword"),
      firstName: Targeter(e, "registerFirstName"),
      lastName: Targeter(e, "registerLastName"),
      isAdmin: false
    };

    createUser(userCheck)
      .then(res => {
        if (res) return history.push('/login');

        return alert('Invalid username or password')
      })
  }

  return (
    <>
      <Link to="/login"><button className='continue_shopping_button'>Login</button></Link>
      <div className='basket_header'>
        <h1>Create User</h1>
      </div>
      <div className="registerFormContainer">
        <form className="loginForm" onSubmit={newUser}>
          <div className="loginInputWrapper">
            <label>Email</label>
            <input className="loginInput" name="registerEmail" placeholder="Insert email" required></input>
          </div>
          <div className="loginInputWrapper">
            <label>Password</label>
            <input className="loginInput" type="password" name="registerPassword" placeholder="Insert password" required></input>
          </div>
          <div className="loginInputWrapper">
            <label>First Name</label>
            <input className="loginInput" name="registerFirstName" placeholder="Insert first name" required></input>
          </div>
          <div className="loginInputWrapper">
            <label>Last Name</label>
            <input className="loginInput" name="registerLastName" placeholder="Insert last name" required></input>
          </div>
          <div className="login_newUser_buttons">
            <button type="submit" className="login_basket" >Create user</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterPage