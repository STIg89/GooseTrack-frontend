import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import { register, resendEmail } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { registerLocale } from 'react-datepicker';
import { enGB, uk } from 'date-fns/locale';

// import { setAuthHeader } from '../../../redux/auth/operations';
// import { refreshUser } from '../../../redux/auth/operations';
// import { selectToken } from '../../../redux/auth/selectors';
import { AuthNavigate } from 'components/Auth/AuthNavigate/AuthNavigate';
import RegistrationSuccessModal from './RegisterSuccessModal/RegisterSuccessModal';

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
  RegisterGooseImage,
  BtnGoogle,
  GoogleIcon,
  Or,
} from './RegisterForm.styled';
import gooseRegister2x from 'images/goose-register@2x.png';
import gooseRegister from 'images/goose-register.png';
import Icons from 'images/sprite.svg';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
  const nameId = nanoid();
  const [isOpened, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

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
    name: yup
      .string()
      .min(3)
      .max(
        30,
        language === 'enGB'
          ? 'Name must be at most 30 characters'
          : "Ім'я має містити не більше 30 символів"
      )
      .required(
        language === 'enGB'
          ? 'Please enter your name'
          : "Будь ласка, введіть своє ім'я"
      ),
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

  const handleToggleModal = () => setIsModalOpen(!isOpened);

  const handleResendEmail = async () => {
    try {
      await dispatch(resendEmail(userEmail));
    } catch (error) {
      console.error('Failed to resend email:', error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        setUserEmail(values.email);
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        ).then(() => {
          resetForm();
          setIsModalOpen(true);
        });
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
                {i18n.language === 'en' ? 'Sign Up' : 'Зареєстрація'}
              </StyleFormTitle>
              <StyleLabel htmlFor={nameId}>
                <StyleParaghraph>
                  {i18n.language === 'en' ? 'Name' : "Ім'я"}
                </StyleParaghraph>
                <StyleInput
                  type="text"
                  name="name"
                  id={nameId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder={
                    i18n.language === 'en'
                      ? 'Enter your name'
                      : "Ведіть своє ім'я"
                  }
                />
              </StyleLabel>
              <ErrorMessage>
                {errors.name && touched.name && errors.name}
              </ErrorMessage>
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
                  {i18n.language === 'en' ? 'Sign Up' : 'Зареєструватися'}
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
                  : 'Зареєструйтеся через Google'}
              </BtnGoogle>
            </Form>
            <AuthNavigate
              route="/login"
              content={i18n.language === 'en' ? 'Log In' : 'Увійти'}
            />
            <RegisterGooseImage
              srcSet={`${gooseRegister} 1x, ${gooseRegister2x} 2x`}
              src={gooseRegister2x}
              alt="goose"
            />
          </StyleFormContainer>
          {isOpened && (
            <RegistrationSuccessModal
              onCloseModal={handleToggleModal}
              onResendEmail={() => handleResendEmail(values.email)}
              email={values.email}
            />
          )}
        </Wrapper>
      )}
    </Formik>
  );
};
