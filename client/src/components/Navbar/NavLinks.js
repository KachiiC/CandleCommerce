import { UserOutlined, ShoppingOutlined, FireFilled } from '@ant-design/icons';

const NavLinks = [
    {
        path: "profile",
        icon: <UserOutlined style={{ color: "grey" }} />
    },
    {
        path: "orders",
        icon: <ShoppingOutlined style={{ color: "grey" }} />
    },
    {
        path: "products",
        icon: <FireFilled style={{ color: "grey" }} />
    }
]

export default NavLinks