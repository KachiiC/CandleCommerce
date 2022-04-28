import { Link, useHistory } from "react-router-dom"
import { checkUser } from '../../services/userService.js';
import { Targeter } from "../../helpers/index.js";
import './LoginPage.css'

const LoginPage = (props) => {

    const history = useHistory();
    const { setUser } = props

    //call the checkUser on form submit
    const checkDetails = (e) => {

        e.preventDefault();
        const userCheck = {
            email: Targeter(e, "loginEmail"),
            password: Targeter(e, "loginPassword")
        };

        checkUser(userCheck)
            .then(response => {
                const { _id, email, firstName, lastName, isAdmin } = response
                if (response) {
                    setUser({ _id, email, firstName, lastName, isAdmin })
                    return history.push('/');
                }
                return alert('Incorrect username or password')
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
                <h1>Login</h1>
            </div>
            <div className="loginFormContainer">
                <form className="loginForm" onSubmit={checkDetails}>
                    <div className="loginInputWrapper">
                        <label>Email</label>
                        <input className="loginInput" name="loginEmail" placeholder="Insert email" required></input>
                    </div>
                    <div className="loginInputWrapper">
                        <label>Password</label>
                        <input className="loginInput" type="password" name="loginPassword" placeholder="Insert password" required></input>
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

export default LoginPage