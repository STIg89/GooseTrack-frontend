import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../../redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

import { setAuthHeader } from '../../../redux/auth/operations';
import { refreshUser } from '../../../redux/auth/operations';
import { selectToken } from '../../../redux/auth/selectors';
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
} from '../RegisterForm/RegisterForm.styled';
import gooseLogin2x from '../../../images/goose-login-2x.png';
import gooseLogin from '../../../images/goose-login.png';
import Icons from '../../../images/sprite.svg';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();

  const token = useSelector(selectToken);
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
              <StyleFormTitle>Log In</StyleFormTitle>

              <StyleLabel htmlFor={emailId}>
                <StyleParaghraph>Email</StyleParaghraph>
                <StyleInput
                  type="email"
                  name="email"
                  id={emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                />
              </StyleLabel>
              <ErrorMessage>
                {errors.email && touched.email && errors.email}
              </ErrorMessage>

              <StyleLabel htmlFor={passwordId}>
                <StyleParaghraph>Password</StyleParaghraph>
                <StyleInput
                  type="password"
                  name="password"
                  id={passwordId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                />
              </StyleLabel>
              <ErrorMessage>
                {errors.password && touched.password && errors.password}
              </ErrorMessage>
              <StyleButton type="submit" disabled={isSubmitting}>
                <ButtonText>
                  Log In
                  <Svg>
                    <use href={`${Icons}#login-door-sf`}></use>
                  </Svg>
                </ButtonText>
              </StyleButton>
            </Form>
            <AuthNavigate route="/register" content="Sign Up" />
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
