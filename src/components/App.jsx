import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './Auth/AuthRoutes/Public';
import PrivateRoute from './Auth/AuthRoutes/Private';
import MainLayout from 'pages/MainLayout/MainLayout';
import { Loader } from '../utils/loader/loader';
import { useDateValidation } from 'helpers/useDateValidation';
import { useState } from 'react';

import ChoosedMonth from './Calendar/ChoosedMonth/ChoosedMonth';
import ChoosedDay from './Calendar/ChoosedDay/ChoosedDay';
import Page404 from './Page404/Page404';
import LoginWithToken from './LoginWithToken';

const StartPage = lazy(() => import('pages/Start/StartPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));

const AccountPage = lazy(() => import('pages/Account/AccountPage'));
const CalendarPage = lazy(() => import('pages/Calendar/CalendarPage'));

// const Loader = () => <>...Loading</>;
const Lazy = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export const App = () => {
  const date = useDateValidation();
  const [selectedDay, setSelectedDay] = useState(new Date(date));
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route>
          <Route path="" element={<PublicRoute />}>
            <Route
              index
              element={
                <Lazy>
                  <StartPage />
                </Lazy>
              }
            />
            <Route
              path="login"
              element={
                <Lazy>
                  <LoginPage />
                </Lazy>
              }
            />
            <Route
              path="register"
              element={
                <Lazy>
                  <RegisterPage />
                </Lazy>
              }
            />
            <Route path="login/:token" element={<LoginWithToken />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="" element={<MainLayout />}>
              <Route
                path="calendar"
                element={
                  <Lazy>
                    <CalendarPage
                      selectedDay={selectedDay}
                      setSelectedDay={setSelectedDay}
                    />
                  </Lazy>
                }
              >
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route
                  path="day/:currentDay"
                  element={
                    <ChoosedDay
                      selectedDay={selectedDay}
                      setSelectedDay={setSelectedDay}
                    />
                  }
                />
              </Route>
              <Route
                path="account"
                element={
                  <Lazy>
                    <AccountPage />
                  </Lazy>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
