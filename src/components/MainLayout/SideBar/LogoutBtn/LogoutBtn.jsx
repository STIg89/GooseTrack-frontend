import { FiLogOut } from 'react-icons/fi';
import { StyledLogOutBtn } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';

const LogOutBtn = () => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  return (
    <StyledLogOutBtn type="button" onClick={() => dispatch(logout())}>
      {i18n.language === 'en' ? 'Log out' : 'Вихід'} <FiLogOut />{' '}
    </StyledLogOutBtn>
  );
};

export default LogOutBtn;
