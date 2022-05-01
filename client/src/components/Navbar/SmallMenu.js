import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import NavLinksData from './NavLinksData'

const SmallMenu = (props) => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // Login in and out logic
    const authLogin = () => loginWithRedirect()
    const authLogout = () => logout({ returnTo: "http://127.0.0.1:3000" })
    // filter out pages which do not require authentication
    const unauthedLinks = NavLinksData.filter((link) => !link.authentication_required)

    const authenticationLogic = isAuthenticated ? "LOGOUT" : "LOGIN"


    // If unautheticated no access to authentication required pages.
    const linksLogic = isAuthenticated ? NavLinksData : unauthedLinks

    // If autheticated return logout, if not return login,
    const actionLogic = isAuthenticated ? authLogout : authLogin

    const displaySmallLinks = linksLogic.map((nav) => {

        return (
            <Link to={`/${nav.path}`}>
                <div className="small-nav-link" key={nav.path} onClick={() => props.setMenu(false)}>
                    {nav.path.toUpperCase()}
                </div>
            </Link>
        )
    })

    return (
        <div className="small-menu">
            {displaySmallLinks}
            <div className="small-nav-link" onClick={() => actionLogic()}>
                {authenticationLogic}
            </div>
        </div>
    )

}

export default SmallMenu