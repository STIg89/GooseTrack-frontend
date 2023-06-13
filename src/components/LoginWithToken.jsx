import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginWithToken } from '../redux/auth/operations';

const LoginWithToken = () => {
  let { accessToken, refreshToken } = useParams();
  console.log('accessToken:', accessToken);
  console.log('refreshToken:', refreshToken);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken(accessToken, refreshToken))
      .then(() => navigate('/calendar'))
      .catch(() => navigate('/login'));
  }, [accessToken, navigate, dispatch, refreshToken]);

  return null;
  //   ЛОДЕР
};

export default LoginWithToken;
