import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginWithToken } from '../redux/auth/operations';

const LoginWithToken = () => {
  let { accessToken } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken(accessToken))
      .then(() => navigate('/calendar'))
      .catch(() => navigate('/login'));
  }, [accessToken, navigate, dispatch]);

  return null;
};

export default LoginWithToken;
