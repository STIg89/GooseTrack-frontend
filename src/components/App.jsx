import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { setAuthHeader } from '../redux/auth/operations';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/selectors';

const Register = lazy(() => import('../pages/Register/RegisterPage'));

const App = () => {
  const token = useSelector(selectToken);
  setAuthHeader(token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [token, dispatch]);

  return (
    <>
      <Suspense fallback={''}>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
