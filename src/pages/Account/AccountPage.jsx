import { useState } from 'react';
import { UserForm } from '../../components/UserForm/UserForm/UserForm';
import { ChangePassword } from '../../components/UserForm/ChangePassword/ChangePassword';

import { Wrapper, Button, Separator } from './AccountPage.styled';

const AccountPage = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);

  return (
    <>
      {/* Buttons */}
      <Wrapper>
        <Button
          type="button"
          onClick={() => setIsChangePassword(false)}
          className={`${isChangePassword ? 'notactive' : 'active'}`}
        >
          Personal Details
        </Button>
        <Separator> | </Separator>
        <Button
          type="button"
          onClick={() => setIsChangePassword(true)}
          className={` ${isChangePassword ? 'active' : 'notactive'}`}
        >
          Change Passcode
        </Button>
      </Wrapper>

      {/* Display Personal Details or Change Password */}
      {!isChangePassword ? <UserForm /> : <ChangePassword />}
    </>
  );
};

export default AccountPage;
