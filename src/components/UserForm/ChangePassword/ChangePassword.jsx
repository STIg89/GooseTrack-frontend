import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updatePassword } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Loader } from '../../../utils/loader/loader';
import Icons from 'images/sprite.svg';

import {
  Wrapper,
  StyledForm,
  Inputs,
  StyledInput,
  StyledLabel,
  ShowButton,
  ViewIcon,
  HideIcon,
  ErrorMessage,
  SubmitBtn,
} from './ChangePassword.styled';

// Validation Schema YUP
const validationSchema = yup.object().shape({
  old_password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
  new_password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
  confirm_password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
});

export const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfimedPassword, setShowConfimedPassword] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();

  // Translation
  const { i18n } = useTranslation();

  // Initial values for form
  const [initialValues, setInitialValues] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  // Submit form
  const handleSubmit = (values, { resetForm }) => {
    setShowLoader(true);

    let data = { ...values };
    delete data.confirm_password;
    let promise = dispatch(updatePassword(data));

    promise.then(function (response) {
      setShowLoader(false);

      if (!response.meta.rejectedWithValue) {
        setInitialValues({
          old_password: '',
          new_password: '',
          confirm_password: '',
        });
        Notify.success('Password updated');
        resetForm();
      }
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleBlur,
        handleChange,
      }) => (
        <Wrapper>
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            {showLoader && <Loader />}

            {/* Inputs */}
            <Inputs>
              {/* Old Password */}
              <StyledLabel
                htmlFor="old_password"
                className={`${
                  touched.old_password
                    ? errors.old_password
                      ? 'error'
                      : ''
                    : ''
                }`}
              >
                {i18n.language === 'en' ? 'Old Password' : 'Старий пароль'}

                <StyledInput
                  type={showOldPassword ? 'text' : 'password'} // show or hide password
                  name="old_password"
                  id="old_password"
                  autoComplete="off"
                  className={`${
                    touched.old_password
                      ? errors.old_password
                        ? 'error'
                        : ''
                      : ''
                  }`}
                  value={values.old_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={
                    i18n.language === 'en'
                      ? 'Enter your password'
                      : 'Введіть старий пароль'
                  }
                />

                {/* Show password */}
                <ShowButton
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)} // show or hide password
                >
                  {showOldPassword ? (
                    <ViewIcon>
                      <use href={`${Icons}#opened-eye`}></use>
                    </ViewIcon>
                  ) : (
                    <HideIcon>
                      <use href={`${Icons}#closed-eye`}></use>
                    </HideIcon>
                  )}
                </ShowButton>

                {/* Error message */}
                <ErrorMessage>
                  {touched.old_password && errors.old_password}
                </ErrorMessage>
              </StyledLabel>

              {/* New Password */}
              <StyledLabel
                htmlFor="new_password"
                className={`${
                  touched.new_password
                    ? errors.new_password ||
                      values.old_password === values.new_password
                      ? 'error'
                      : 'success'
                    : ''
                }`}
              >
                {i18n.language === 'en' ? 'New Password' : 'Новий пароль'}

                <StyledInput
                  type={showNewPassword ? 'text' : 'password'} // show or hide password
                  name="new_password"
                  id="new_password"
                  className={`${
                    touched.new_password
                      ? errors.new_password ||
                        values.old_password === values.new_password
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                  value={values.new_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={
                    i18n.language === 'en'
                      ? 'Enter your new password'
                      : 'Введіть новий пароль'
                  }
                />

                {/* Show password */}
                <ShowButton
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)} // show or hide password
                >
                  {showNewPassword ? (
                    <ViewIcon>
                      <use href={`${Icons}#opened-eye`}></use>
                    </ViewIcon>
                  ) : (
                    <HideIcon>
                      <use href={`${Icons}#closed-eye`}></use>
                    </HideIcon>
                  )}
                </ShowButton>

                {/* Error message */}
                <ErrorMessage>
                  {(touched.new_password && errors.new_password) ||
                    (values.new_password.length > 0 &&
                      values.old_password === values.new_password &&
                      (i18n.language === 'en'
                        ? 'New password mustn`t be the same'
                        : 'Новий пароль повинен відрізнятись'))}
                </ErrorMessage>
              </StyledLabel>

              {/* Confirm Password */}
              <StyledLabel
                htmlFor="confirm_password"
                className={`${
                  touched.confirm_password
                    ? errors.confirm_password ||
                      values.new_password !== values.confirm_password
                      ? 'error'
                      : 'success'
                    : ''
                }`}
              >
                {i18n.language === 'en'
                  ? 'Confirm password'
                  : 'Підтвердіть пароль'}

                <StyledInput
                  type={showConfimedPassword ? 'text' : 'password'} // show or hide password
                  name="confirm_password"
                  id="confirm_password"
                  className={`${
                    touched.confirm_password
                      ? errors.confirm_password ||
                        values.new_password !== values.confirm_password
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={
                    i18n.language === 'en'
                      ? 'Confirm your new password'
                      : 'Підтвердіть пароль'
                  }
                />

                {/* Show password */}
                <ShowButton
                  type="button"
                  onClick={() => setShowConfimedPassword(!showConfimedPassword)} // show or hide  password
                >
                  {showConfimedPassword ? (
                    <ViewIcon>
                      <use href={`${Icons}#opened-eye`}></use>
                    </ViewIcon>
                  ) : (
                    <HideIcon>
                      <use href={`${Icons}#closed-eye`}></use>
                    </HideIcon>
                  )}
                </ShowButton>

                {/* Error message */}
                <ErrorMessage>
                  {touched.confirm_password &&
                    values.new_password !== values.confirm_password &&
                    (i18n.language === 'en'
                      ? 'Password mismatch'
                      : 'Паролі не співпадають')}
                </ErrorMessage>
              </StyledLabel>
            </Inputs>

            {/* Submit button */}
            <SubmitBtn
              type="submit"
              disabled={
                !values.new_password.length > 0 ||
                values.new_password !== values.confirm_password
              }
            >
              {i18n.language === 'en' ? 'Save changes' : 'Зберегти зміни'}
            </SubmitBtn>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};
