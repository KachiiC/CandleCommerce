import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // Login in and out logic
    const authLogin = () => loginWithRedirect()
    const authLogout = () => logout({ returnTo: "http://127.0.0.1:3000" })

    const authenticationLogic = isAuthenticated ? "LOGOUT" : "LOGIN"
    // If autheticated return logout, if not return login,
    const actionLogic = isAuthenticated ? authLogout : authLogin
    
    return (
        <div className="account-button" onClick={() => actionLogic()}>
            {authenticationLogic}
        </div>
    )
}

export default AuthenticationButton