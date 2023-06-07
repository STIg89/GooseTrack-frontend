import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginWithToken } from '../redux/auth/operations';

const LoginWithToken = () => {
  let { token } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken(token))
      .then(() => navigate('/calendar')) 
      .catch(() => navigate('/login'));
  }, [token, navigate, dispatch]);

  return null; 
//   ЛОДЕР 
};

export default LoginWithToken;