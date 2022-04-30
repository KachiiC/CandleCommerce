import { Button } from "antd"

const buttonStyle = {
    borderRadius: "15px"
}

const ProfileFormButtons = ({ click }) => (
    <div className="profile-form-buttons">
        <Button type="primary" htmlType="submit" style={buttonStyle}>
            Submit
        </Button>
        <Button htmlType="button" type="primary" danger onClick={click} style={buttonStyle}>
            Reset
        </Button>
    </div>
)

export default ProfileFormButtons