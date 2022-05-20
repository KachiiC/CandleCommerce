import { useAuth0 } from '@auth0/auth0-react';
import { Form } from 'antd';
import ProfileFormInputs from './ProfileFormInputs';
import ProfileFormButtons from './ProfileFormButtons';
import { defaultProfileFields } from '../../data/profile';
import './Profile.css';
import { useEffect, useState } from 'react';
import { loginOrRegister, updateUserDetails } from '../../services/userService';
import { UserAuth } from '../../interfaces/UserAuth';
import { UpdateAlert } from './UpdateAlert';

interface FormValues {
  name: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  postcode: string;
  phone_number: string;
}

const Profile = () => {
  const [profileForm] = Form.useForm();
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState<UserAuth>(defaultProfileFields);
  const [formSent, setFormSent] = useState(false);

  const onFill = () => profileForm.setFieldsValue(userInfo);

  useEffect(() => {
    loginOrRegister(user as UserAuth).then((res: UserAuth) => {
      setUserInfo(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFinish = (values: FormValues) => {
    const { name, address1, address2, city, country, postcode, phone_number } =
      values;
    const data = {
      userData: {
        sub: user!.sub,
        name,
        address: {
          address1,
          address2,
          country,
          city,
          postcode
        },
        phone_number
      }
    };
    updateUserDetails(data as UserAuth).then((res: UserAuth) => {
      setUserInfo(res);
      setFormSent(!formSent);
    });
  };

  return (
    <>
      {formSent ? <UpdateAlert /> : null}
      <div className="profile-form-container">
        <h1>{defaultProfileFields.userData.name}</h1>
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
    </>
  );
};

export default Profile;
