import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

import {
  Wrapper,
  RegisterButton,
  RegisterFormContainer,
  RegisterFormTitle,
  Form,
  RegisterInput,
  RegisterLabel,
  RegisterParaghraph,
  ErrorMessage,
  ButtonText,
  RegisterGooseImage,
} from './RegisterForm.styled';
import Icon from '../../../images/log-in-01.svg';
import GooseRegister from '../../../images/goose-register.png';
import GooseRegister2x from '../../../images/goose-register@2x.png';
import { AuthNavigate } from '../AuthNavigate/AuthNavigate';

const routes = {
  register: '/register',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(30, 'Name must be at most 30 characters')
    .required('Please enter your name'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
  const nameId = nanoid();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          register({
            name: values.name,
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
          <RegisterFormContainer>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <RegisterFormTitle>Sign Up</RegisterFormTitle>
              <RegisterLabel htmlFor={nameId}>
                <RegisterParaghraph>Name</RegisterParaghraph>
                <RegisterInput
                  type="text"
                  name="name"
                  id={nameId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter your name"
                />
              </RegisterLabel>
              <ErrorMessage>
                {errors.name && touched.name && errors.name}
              </ErrorMessage>
              <RegisterLabel htmlFor={emailId}>
                <RegisterParaghraph>Email</RegisterParaghraph>
                <RegisterInput
                  type="email"
                  name="email"
                  id={emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                />
              </RegisterLabel>
              <ErrorMessage>
                {errors.email && touched.email && errors.email}
              </ErrorMessage>
              <RegisterLabel htmlFor={passwordId}>
                <RegisterParaghraph>Password</RegisterParaghraph>
                <RegisterInput
                  type="password"
                  name="password"
                  id={passwordId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                />
              </RegisterLabel>
              <ErrorMessage>
                {errors.password && touched.password && errors.password}
              </ErrorMessage>
              <RegisterButton type="submit" disabled={isSubmitting}>
                <ButtonText>
                  Sign Up
                  <img src={Icon} alt="Login Icon" />
                </ButtonText>
              </RegisterButton>
            </Form>
            <AuthNavigate route={routes.login} content="Log In" />
            <RegisterGooseImage
              srcSet={`${GooseRegister} 1x, ${GooseRegister2x} 2x`}
              src={GooseRegister}
              alt="goose"
            />
          </RegisterFormContainer>
        </Wrapper>
      )}
    </Formik>
  );
};
