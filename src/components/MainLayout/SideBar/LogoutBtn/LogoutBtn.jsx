import { FiLogOut } from 'react-icons/fi';
import { StyledLogOutBtn } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';

const LogOutBtn = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledLogOutBtn type="button" onClick={() => dispatch(logout())}>
      {t('Log out')} <FiLogOut />{' '}
    </StyledLogOutBtn>
  );
};

export default LogOutBtn;
