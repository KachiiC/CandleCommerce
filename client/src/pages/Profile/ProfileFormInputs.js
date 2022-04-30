import { Form, Input } from 'antd';

const formInputsData = [
    {
        name: "name",
        label: "name",
        placeholder: "name",
        required: true
    },
    {
        name: "address1",
        label: "address line 1",
        placeholder: "address line 1",
        required: true
    },
    {
        name: "address2",
        label: "address line 2",
        placeholder: "address line 2",
        required: false
    },
    {
        name: "city",
        label: "city",
        placeholder: "city",
        required: true
    },
    {
        name: "country",
        label: "country",
        placeholder: "country",
        required: true
    },
    {
        name: "post_code",
        label: "post code",
        placeholder: "post code",
        required: true
    }
]

const ProfileFormInputs = () => {

    return formInputsData.map((input) => {

        const { Item } = Form

        const { name, label, placeholder, required } = input

        const ItemArgs = {
            key: name,
            name,
            label,
            rules: [{ required: required }],
        }

        return (
            <Item {...ItemArgs}>
                <Input placeholder={placeholder} />
            </Item>
        )
    })
}

export default ProfileFormInputs