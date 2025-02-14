import { Form, Input } from 'antd';

const formInputsData = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'name',
    required: true
  },
  {
    name: 'address1',
    label: 'Address line 1',
    placeholder: 'address line 1',
    required: true
  },
  {
    name: 'address2',
    label: 'Address line 2',
    placeholder: 'address line 2',
    required: false
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'city',
    required: true
  },
  {
    name: 'country',
    label: 'Country',
    placeholder: 'country',
    required: true
  },
  {
    name: 'postcode',
    label: 'Post Code',
    placeholder: 'post code',
    required: true
  },
  {
    name: 'phone_number',
    label: 'Phone number',
    placeholder: 'phone number',
    required: false
  }
];

const ProfileFormInputs = () => {
  return (
    <>
      {formInputsData.map(input => {
        const { Item } = Form;

        const { name, label, placeholder, required } = input;

        const ItemArgs = {
          key: name,
          name,
          label,
          rules: [{ required: required }]
        };

        return (
          <Item {...ItemArgs}>
            <Input placeholder={placeholder} />
          </Item>
        );
      })}
    </>
  );
};

export default ProfileFormInputs;
