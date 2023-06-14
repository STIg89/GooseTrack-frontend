import { useState } from 'react';
import { UserForm } from '../../components/UserForm/UserForm/UserForm';
import { ChangePassword } from '../../components/UserForm/ChangePassword/ChangePassword';
import { useTranslation } from 'react-i18next';

import { Wrapper, Button, Separator } from './AccountPage.styled';

const AccountPage = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);

  // Translation
  const { i18n } = useTranslation();

  return (
    <>
      {/* Buttons */}
      <Wrapper>
        <Button
          type="button"
          onClick={() => setIsChangePassword(false)}
          className={`${isChangePassword ? 'notactive' : 'active'}`}
        >
          {i18n.language === 'en' ? 'Personal Details' : 'Особисті дані'}
        </Button>
        <Separator> | </Separator>
        <Button
          type="button"
          onClick={() => setIsChangePassword(true)}
          className={` ${isChangePassword ? 'active' : 'notactive'}`}
        >
          {i18n.language === 'en' ? 'Change Password' : 'Змінити пароль'}
        </Button>
      </Wrapper>

      {/* Display Personal Details or Change Password */}
      {!isChangePassword ? <UserForm /> : <ChangePassword />}
    </>
  );
};

export default AccountPage;
