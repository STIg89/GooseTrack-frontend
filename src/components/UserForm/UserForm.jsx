import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser, uploadAvatar } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Loader } from '../../utils/loader/loader';
import Icons from 'images/sprite.svg';

import {
  Wrapper,
  StyledForm,
  AvatarContainer,
  AvatarWrapper,
  AvatarImage,
  AvatarPlaceholder,
  AvatarLabel,
  AvatarBtn,
  AddAvatar,
  UserTitle,
  User,
  Inputs,
  InputWrapper,
  StyledInput,
  StyledLabel,
  StyledDatePicker,
  SubmitBtn,
  DatePickerWrapper,
  ErrorMessage,
  ErrorImg,
  CorrectImg,
} from './UserForm.styled';

// Validation for phone
const phoneRegex = /^\+?3?8?(0\d{9})$/;

// Validation Schema YUP
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(16, 'Name must not exceed 16 characters')
    .required('Name is a required field'),
  phone: yup.string().matches(phoneRegex, 'Phone number is not valid'),
  birthday: yup.date(),
  skype: yup.string().max(16, 'Skype must not exceed 16 characters'),
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required field'),
});

export const UserForm = () => {
  const user = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [showAvatartLoader, setShowAvatartLoader] = useState(false);

  const [username, setUsername] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      name: user.name || '',
      phone: user.phone || '',
      birthday: user?.birthday?.slice(0, 10) || new Date(),
      skype: user.skype || '',
      email: user.email || '',
    };
    setAvatarUrl(user.avatarURL);
    setUsername(user.name);
    setInitialValues({ ...data });
  }, [user]);

  // Initial values for form
  const [initialValues, setInitialValues] = useState({
    name: '',
    phone: '',
    birthday: new Date(),
    skype: '',
    email: '',
  });

  // Change avatar
  const handleFileChange = e => {
    setShowAvatartLoader(true);
    let promise = dispatch(uploadAvatar(e.target.files[0]));
    promise.then(function (response) {
      setAvatarUrl(response.payload.data.data.updatedUser.avatarURL);
      setShowAvatartLoader(false);
    });
  };

  // Submit form
  const handleSubmit = (values, { resetForm }) => {
    values.birthday = new Date(values.birthday).toISOString().split('T')[0];
    dispatch(updateUser(values));
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
        setFieldValue,
        setTouched,
      }) => (
        <Wrapper>
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            {/* Avatar */}
            <AvatarContainer>
              {showAvatartLoader && <Loader />}
              <AvatarWrapper>
                {avatarUrl ? (
                  <AvatarImage alt="avatar" src={avatarUrl} />
                ) : (
                  <AvatarPlaceholder>
                    {username ? username[0].toUpperCase() : ''}
                  </AvatarPlaceholder>
                )}
              </AvatarWrapper>

              <AvatarLabel htmlFor="avatar">
                <AvatarBtn>
                  <use href={`${Icons}#profile-plus-s`}></use>
                </AvatarBtn>
                <AddAvatar
                  id="avatar"
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                ></AddAvatar>
              </AvatarLabel>
            </AvatarContainer>

            {/* User data */}
            <UserTitle>{user.name}</UserTitle>
            <User>{t('user')}</User>

            {/* Inputs */}
            <Inputs>
              {/* Name */}
              <InputWrapper>
                <StyledLabel
                  htmlFor="name"
                  className={`${
                    values.name && touched.name
                      ? errors.name
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                >
                  {t('User Name')}
                  <StyledInput
                    type="text"
                    name="name"
                    id="name"
                    className={`${
                      touched.name ? (errors.name ? 'error' : 'success') : ''
                    }`}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                  />
                  {errors.name && touched.name ? (
                    <ErrorImg>
                      <use href={`${Icons}#icon-input-error`}></use>
                    </ErrorImg>
                  ) : null}
                  {!errors.name && touched.name ? (
                    <CorrectImg>
                      <use href={`${Icons}#icon-input-correct`}></use>
                    </CorrectImg>
                  ) : null}
                  <ErrorMessage>{touched.name && errors.name}</ErrorMessage>
                </StyledLabel>
              </InputWrapper>

              {/* Birthday */}
              <DatePickerWrapper>
                <StyledLabel
                  htmlFor="birthday"
                  className={`${
                    values.birthday && touched.birthday
                      ? errors.birthday
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                >
                  {t('Birthday')}
                  <StyledDatePicker
                    className={`${
                      touched.birthday
                        ? errors.birthday
                          ? 'error'
                          : 'success'
                        : ''
                    }`}
                    name="birthday"
                    id="birthday"
                    type="date"
                    calendarStartDay={1}
                    value={values.birthday}
                    formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                    selected={new Date(values.birthday)}
                    dateFormat="yyyy-MM-dd"
                    onChange={e => {
                      setFieldValue('birthday', e);
                      setTouched({ ...touched, birthday: true });
                    }}
                    maxDate={new Date()}
                  />
                  {errors.birthday && touched.birthday ? (
                    <ErrorImg className="datePickerCheck">
                      <use href={`${Icons}#icon-input-error`}></use>
                    </ErrorImg>
                  ) : null}
                  {!errors.birthday && touched.birthday ? (
                    <CorrectImg className="datePickerCheck">
                      <use href={`${Icons}#icon-input-correct`}></use>
                    </CorrectImg>
                  ) : null}
                  <ErrorMessage>
                    {touched.birthday && errors.birthday}
                  </ErrorMessage>
                </StyledLabel>
              </DatePickerWrapper>

              {/* Email */}
              <InputWrapper>
                <StyledLabel
                  htmlFor="email"
                  className={`${
                    values.email && touched.email
                      ? errors.email
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                >
                  Email
                  <StyledInput
                    className={`${
                      touched.email ? (errors.email ? 'error' : 'success') : ''
                    }`}
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email ? (
                    <ErrorImg>
                      <use href={`${Icons}#icon-input-error`}></use>
                    </ErrorImg>
                  ) : null}
                  {!errors.email && touched.email ? (
                    <CorrectImg>
                      <use href={`${Icons}#icon-input-correct`}></use>
                    </CorrectImg>
                  ) : null}
                  <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
                </StyledLabel>
              </InputWrapper>

              {/* Phone */}
              <InputWrapper>
                <StyledLabel
                  htmlFor="phone"
                  className={`${
                    values.phone && touched.phone
                      ? errors.phone
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                >
                  {t('Phone')}
                  <StyledInput
                    className={`${
                      values.phone && touched.phone
                        ? errors.phone
                          ? 'error'
                          : 'success'
                        : ''
                    }`}
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+380XXXXXXXXX"
                  />
                  {errors.phone && touched.phone ? (
                    <ErrorImg>
                      <use href={`${Icons}#icon-input-error`}></use>
                    </ErrorImg>
                  ) : null}
                  {values.phone && !errors.phone && touched.phone ? (
                    <CorrectImg>
                      <use href={`${Icons}#icon-input-correct`}></use>
                    </CorrectImg>
                  ) : null}
                  <ErrorMessage>{touched.phone && errors.phone}</ErrorMessage>
                </StyledLabel>
              </InputWrapper>

              {/* Skype */}
              <InputWrapper>
                <StyledLabel
                  htmlFor="skype"
                  className={`${
                    values.skype && touched.skype
                      ? errors.skype
                        ? 'error'
                        : 'success'
                      : ''
                  }`}
                >
                  Skype
                  <StyledInput
                    className={`${
                      values.skype && touched.skype
                        ? errors.skype
                          ? 'error'
                          : 'success'
                        : ''
                    }`}
                    type="text"
                    name="skype"
                    id="skype"
                    value={values.skype}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Add a skype number"
                  />
                  {errors.skype && touched.skype ? (
                    <ErrorImg>
                      <use href={`${Icons}#icon-input-error`}></use>
                    </ErrorImg>
                  ) : null}
                  {values.skype && !errors.skype && touched.skype ? (
                    <CorrectImg>
                      <use href={`${Icons}#icon-input-correct`}></use>
                    </CorrectImg>
                  ) : null}
                  <ErrorMessage>{touched.skype && errors.skype}</ErrorMessage>
                </StyledLabel>
              </InputWrapper>
            </Inputs>
            <SubmitBtn type="submit" disabled={!dirty}>
              {t('Save changes')}
            </SubmitBtn>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};
