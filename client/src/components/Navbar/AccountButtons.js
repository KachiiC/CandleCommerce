import { LoginOutlined, HomeFilled } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

const AccountButton = () => {

    const { Item } = Menu
    // Auth 0 buttons
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // Login in and out logic
    const authLogin = () => loginWithRedirect()
    const authLogout = () => logout({ returnTo: "http://127.0.0.1:3000" })

    // Button Label
    const authenticationLogic = isAuthenticated ? "Logout" : "Login"

    // If autheticated return logout, if not return login,
    const actionLogic = isAuthenticated ? authLogout : authLogin

    // Arguments for account 
    const LogButtonArgs = {
        onClick: () => actionLogic(),
        icon: <LoginOutlined style={{ color: "grey" }} />,
        key: "account",
        style: {
            marginLeft: "auto", width: "120px" 
        }
    }

    return (
        <Item {...LogButtonArgs}>
            {authenticationLogic}
        </Item>
    )
}

export const HomeButton = () => {
    
    const { Item } = Menu

    return (
        <Item key="home">
            <Link to="/">
                <HomeFilled />
            </Link>
        </Item>
    )
}

export default AccountButton