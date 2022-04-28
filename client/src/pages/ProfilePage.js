import { Link, useHistory } from "react-router-dom"
import { Targeter } from "../helpers/index.js";
import { sendUpdatedUser } from '../services/userService.js';

const ProfilePage = (props) => {

  const { user, setUser } = props
  const {
    password,
    firstName,
    lastName,
    email
  } = user

  const history = useHistory();

  //call the updateUser on form submit
  const newUser = e => {
    e.preventDefault();
    const userCheck = {
      email: user.email,
      password: Targeter(e, "updatePassword") ? Targeter("updatePassword") : password,
      firstName: Targeter(e, "updateFirstName") ? Targeter("updateFirstName") : firstName,
      lastName: Targeter(e, "updateLastName") ? Targeter("updateLastName") : lastName,
    };

    sendUpdatedUser(userCheck)
      .then(res => {
        const { _id, email, firstName, lastName, isAdmin } = res
        if (res) {
          setUser({ _id, email, firstName, lastName, isAdmin })
          history.push('/')
          history.push('/profile')
        }
      })
  }

  return (
    <>
      <Link to="/">
        <button className='continue_shopping_button'>
          Home
        </button>
      </Link>
      <div className='basket_header'>
        <h1>Your Details</h1>
      </div>
      <div className="registerFormContainer">
        <form className="loginForm" onSubmit={newUser}>
          <div className="loginInputWrapper">
            <label>Email</label>
            <input className="loginInput" placeholder={email} disabled></input>
          </div>
          <div className="loginInputWrapper">
            <label>Password</label>
            <input className="profileInput" type="password" name="updatePassword" placeholder="Update Password?"></input>
          </div>
          <div className="loginInputWrapper">
            <label>First Name</label>
            <input className="profileInput" name="updateFirstName" placeholder={firstName}></input>
          </div>
          <div className="loginInputWrapper">
            <label>Last Name</label>
            <input className="profileInput" name="updateLastName" placeholder={lastName}></input>
          </div>
          <div className="login_newUser_buttons">
            <button type="submit" className="login_basket" >Update</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProfilePage