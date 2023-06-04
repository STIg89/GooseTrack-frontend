import { FiLogOut } from 'react-icons/fi';
import { StyledLogOutBtn } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const LogOutBtn = () => {
  const dispatch = useDispatch();

  return (
    <StyledLogOutBtn type="button" onClick={() => dispatch(logout())}>
      Log out <FiLogOut />{' '}
    </StyledLogOutBtn>
  );
};

export default LogOutBtn;
