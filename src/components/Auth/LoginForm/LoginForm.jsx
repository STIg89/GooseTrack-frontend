import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from '../../../redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { registerLocale } from 'react-datepicker';
import { enGB, uk } from 'date-fns/locale';

import { setAuthHeader } from '../../../redux/auth/operations';
import { refreshUser } from '../../../redux/auth/operations';
import { selectAccessToken } from '../../../redux/auth/selectors';
import { AuthNavigate } from '../../../components/Auth/AuthNavigate/AuthNavigate';

import {
  Wrapper,
  StyleButton,
  StyleFormContainer,
  StyleFormTitle,
  Form,
  StyleInput,
  StyleLabel,
  StyleParaghraph,
  ErrorMessage,
  ButtonText,
  Svg,
  LoginGooseImage,
  BtnGoogle,
  GoogleIcon,
  Or,
} from '../RegisterForm/RegisterForm.styled';
import gooseLogin2x from '../../../images/goose-login-2x.png';
import gooseLogin from '../../../images/goose-login.png';
import Icons from '../../../images/sprite.svg';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();

  const { i18n } = useTranslation();

  registerLocale('enGB', enGB);
  registerLocale('uk', uk);

  const [language, setLanguage] = useState('');

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLanguage('uk');
    } else {
      setLanguage('enGB');
    }
  }, [i18n.language]);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(
        language === 'enGB'
          ? 'Email must be valid email'
          : 'Електронна адреса має бути дійсною'
      )
      .required(
        language === 'enGB'
          ? 'Email is a required field'
          : 'Поле електронної пошти є обов’язковим для заповнення'
      ),
    password: yup
      .string()
      .min(
        8,
        language === 'enGB'
          ? 'Password must be at least 8 characters'
          : 'Пароль має бути не менше 8 символів'
      )
      .max(
        16,
        language === 'enGB'
          ? 'Password must be at most 16 characters'
          : 'Пароль має містити не більше 16 символів'
      )
      .required(
        language === 'enGB'
          ? 'Password is a required field'
          : "Пароль є обов'язковим полем"
      ),
  });

  const token = useSelector(selectAccessToken);
  setAuthHeader(token);
  useEffect(() => {
    dispatch(refreshUser());
  }, [token, dispatch]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        );
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        isSubmitting,
      }) => (
        <Wrapper>
          <StyleFormContainer>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <StyleFormTitle>
                {i18n.language === 'en' ? 'Log In' : 'Увійти'}
              </StyleFormTitle>

              <StyleLabel htmlFor={emailId}>
                <StyleParaghraph>
                  {i18n.language === 'en' ? 'Email' : 'Електронна адреса'}
                </StyleParaghraph>
                <StyleInput
                  type="email"
                  name="email"
                  id={emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={
                    i18n.language === 'en'
                      ? 'Enter email'
                      : 'Введіть електронну адресу'
                  }
                />
              </StyleLabel>
              <ErrorMessage>
                {errors.email && touched.email && errors.email}
              </ErrorMessage>

              <StyleLabel htmlFor={passwordId}>
                <StyleParaghraph>
                  {i18n.language === 'en' ? 'Password' : 'Пароль'}
                </StyleParaghraph>
                <StyleInput
                  type="password"
                  name="password"
                  id={passwordId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={
                    i18n.language === 'en' ? 'Enter password' : 'Введіть пароль'
                  }
                />
              </StyleLabel>
              <ErrorMessage>
                {errors.password && touched.password && errors.password}
              </ErrorMessage>
              <StyleButton type="submit" disabled={isSubmitting}>
                <ButtonText>
                  {i18n.language === 'en' ? 'Log In' : 'Увійти'}
                  <Svg>
                    <use href={`${Icons}#login-door-sf`}></use>
                  </Svg>
                </ButtonText>
              </StyleButton>
              <Or>{i18n.language === 'en' ? 'or' : 'або'}</Or>
              <BtnGoogle href="https://goosetrack-backend.onrender.com/api/auth/google">
                <GoogleIcon>
                  <use href={`${Icons}#icon-google`}></use>
                </GoogleIcon>
                {i18n.language === 'en'
                  ? 'Sign Up with Google'
                  : 'Увійти через Google'}
              </BtnGoogle>
            </Form>
            <AuthNavigate
              route="/register"
              content={i18n.language === 'en' ? 'Sign Up' : 'Зареєструватися'}
            />
            <LoginGooseImage
              srcSet={`${gooseLogin} 1x, ${gooseLogin2x} 2x`}
              src={gooseLogin2x}
              alt="goose"
            />
          </StyleFormContainer>
        </Wrapper>
      )}
    </Formik>
  );
};
