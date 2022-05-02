import { useAuth0 } from '@auth0/auth0-react';
import { Form } from 'antd';
import ProfileFormInputs from './ProfileFormInputs';
import ProfileFormButtons from './ProfileFormButtons';
import { defaultProfileFields } from '../../data/profile';
import './Profile.css';

interface FormValues {
  name: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  post_code: string;
}

const Demo = () => {
  const [profileForm] = Form.useForm();
  const { user } = useAuth0();

  const handleFinish = (values: FormValues) => {
    const { name, address1, address2, city, country, post_code } = values;

    console.log({
      name,
      address: {
        address1,
        address2,
        country,
        city,
        post_code
      }
    });
  };

  const onFill = () => profileForm.setFieldsValue(defaultProfileFields);

  return (
    <div className="profile-form-container">
      <h1>{defaultProfileFields.name}</h1>
      <div className="profile-form-img-container">
        <img src={user?.picture} alt="profile-placeholder" />
      </div>
      <Form
        form={profileForm}
        onFinish={handleFinish}
        initialValues={defaultProfileFields}
      >
        <ProfileFormInputs />
        <ProfileFormButtons click={onFill} />
      </Form>
    </div>
  );
};

export default Demo;
