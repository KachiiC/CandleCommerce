import { LoginOutlined, HomeFilled } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

const AccountButton = () => {

    const { Item } = Menu
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const authLogin = () => loginWithRedirect()
    const authLogout = () => logout({ returnTo: "http://127.0.0.1:3000" })

    const authenticationLogic = isAuthenticated ? "Logout" : "Login"
    const actionLogic = isAuthenticated ? authLogout : authLogin

    const LogButtonArgs = {
        key: "account",
        icon: <LoginOutlined style={{ color: "grey" }} />,
        onClick: () => actionLogic()
    }

    return (
        <Item {...LogButtonArgs} style={{ marginLeft: "auto" }}>
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