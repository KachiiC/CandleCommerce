import { UserOutlined, ShoppingOutlined, FireFilled } from '@ant-design/icons';

const NavLinksData = [
    {
        path: "profile",
        icon: <UserOutlined style={{ color: "grey" }} />,
        authentication_required: true
    },
    {
        path: "orders",
        icon: <ShoppingOutlined style={{ color: "grey" }} />,
        authentication_required: true
    },
    {
        path: "products",
        icon: <FireFilled style={{ color: "grey" }} />,
        authentication_required: false
    }
]

export default NavLinksData