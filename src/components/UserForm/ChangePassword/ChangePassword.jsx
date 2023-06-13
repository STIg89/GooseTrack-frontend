import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Loader } from '../../../utils/loader/loader';
// import Icons from 'images/sprite.svg';

import {
  Wrapper,
  StyledForm,
  Inputs,
  StyledInput,
  StyledLabel,
  ErrorMessage,
  SubmitBtn,
} from './ChangePassword.styled';

// Validation Schema YUP
const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
});

export const ChangePassword = () => {
  const user = useSelector(selectUser);
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();

  // Translation
  const { t } = useTranslation();

  useEffect(() => {
    const data = {
      old_password: user.old_password || '',
      new_password: user.new_password || '',
      confirm_password: user.confirm_password || '',
    };

    setInitialValues({ ...data });
  }, [user]);

  // Initial values for form
  const [initialValues, setInitialValues] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  // Submit form
  const handleSubmit = (values, { resetForm }) => {
    setShowLoader(true);
    let promise = dispatch(updateUser(values));
    promise.then(function (response) {
      setShowLoader(false);
    });
    setInitialValues(values);
    resetForm();
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        dirty,
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
                      : 'success'
                    : ''
                }`}
              >
                {t('Old Password')}
                <StyledInput
                  type="text"
                  name="old_password"
                  id="old_password"
                  className={`${
                    touched.old_password
                      ? errors.old_password
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                  value={values.old_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                />

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
                    ? errors.new_password
                      ? 'error'
                      : 'success'
                    : ''
                }`}
              >
                {t('New Password')}
                <StyledInput
                  type="text"
                  name="new_password"
                  id="new_password"
                  className={`${
                    touched.new_password
                      ? errors.new_password
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                  value={values.new_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your new password"
                />

                {/* Error message */}
                <ErrorMessage>
                  {touched.new_password && errors.new_password}
                </ErrorMessage>
              </StyledLabel>

              {/* Confirm Password */}

              <StyledLabel
                htmlFor="confirm_password"
                className={`${
                  touched.confirm_password
                    ? errors.confirm_password
                      ? 'error'
                      : 'success'
                    : ''
                }`}
              >
                {t('Confirm password')}
                <StyledInput
                  type="text"
                  name="confirm_password"
                  id="confirm_password"
                  className={`${
                    touched.confirm_password
                      ? errors.confirm_password
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm your new password"
                />

                {/* Error message */}
                <ErrorMessage>
                  {touched.confirm_password && errors.confirm_password}
                </ErrorMessage>
              </StyledLabel>
            </Inputs>

            {/* Submit button */}
            <SubmitBtn
              type="submit"
              disabled={!dirty || !values.name || !values.email || errors.email}
            >
              {t('Save changes')}
            </SubmitBtn>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};
