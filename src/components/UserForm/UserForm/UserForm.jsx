import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { registerLocale } from 'react-datepicker';
import { enGB, uk } from 'date-fns/locale';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Loader } from '../../../utils/loader/loader';
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
  ChevronDown,
} from './UserForm.styled';

// Validation for phone
const phoneRegex = /^\+?3?8?(0\d{9})$/;

// Validation Schema YUP

export const UserForm = () => {
  const user = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [username, setUsername] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      name: user.name || '',
      phone: user.phone || '',
      birthday: user?.birthday?.slice(0, 10) || new Date(),
      skype: user.skype || '',
      email: user.email || '',
      avatar: null,
    };
    setAvatarUrl(user.avatarURL);
    setUsername(user.name);
    setInitialValues({ ...data });
  }, [user]);

  // Initial values for form
  const [initialValues, setInitialValues] = useState({
    name: '',
    avatar: '',
    phone: '',
    birthday: new Date(),
    skype: '',
    email: '',
  });

  // Submit form
  const handleSubmit = (values, { resetForm }) => {
    setShowLoader(true);
    values.birthday = new Date(values.birthday).toISOString().split('T')[0];
    let promise = dispatch(updateUser(values));
    promise.then(function (response) {
      setShowLoader(false);
    });
    setInitialValues(values);
    resetForm();
  };

  // Translation
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
      .max(
        16,
        language === 'enGB'
          ? 'Name must not exceed 16 characters'
          : "Ім'я не повинно бути більшим за 16 символів"
      )
      .required(
        language === 'enGB'
          ? 'Name is a required field'
          : "Ім'я це обов'язкове поле"
      ),
    phone: yup
      .string()
      .matches(
        phoneRegex,
        language === 'enGB'
          ? 'Phone number is not valid'
          : 'Номер телефону введено неправильно'
      ),
    birthday: yup.date(),
    skype: yup
      .string()
      .max(
        16,
        language === 'enGB'
          ? 'Skype must not exceed 16 characters'
          : "Skype ім'я не повинно бути більшим за 16 символів"
      ),
    email: yup
      .string()
      .email(
        language === 'enGB'
          ? 'Email must be valid email'
          : 'Адреса електронної пошти введена неправильно'
      )
      .required(
        language === 'enGB'
          ? 'Email is a required field'
          : 'Електронна пошта це обовєязкове поле'
      ),
  });

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
            {showLoader && <Loader />}
            <AvatarContainer>
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
                  accept="image/png, image/gif, image/jpeg"
                  name="avatar"
                  onChange={e => {
                    if (e.target.files) {
                      setFieldValue('avatar', e.target.files[0]);
                      setTouched({ ...touched, avatar: true });
                      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                ></AddAvatar>
              </AvatarLabel>
            </AvatarContainer>

            {/* User data */}
            <UserTitle>{user.name}</UserTitle>
            <User>{i18n.language === 'en' ? 'user' : 'користувач'}</User>

            {/* Inputs */}
            <Inputs>
              {/* Name */}
              <InputWrapper>
                <StyledLabel
                  htmlFor="name"
                  className={`${
                    touched.name ? (errors.name ? 'error' : 'success') : ''
                  }`}
                >
                  {i18n.language === 'en' ? 'User Name' : "Ім'я користувача"}
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
                    placeholder={
                      i18n.language === 'en' ? 'Enter text' : "Ведіть своє ім'я"
                    }
                  />

                  {/* Error image */}
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

                  {/* Error message */}
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
                  {i18n.language === 'en' ? 'Birthday' : 'Дата народження'}
                  <StyledDatePicker
                    className={`${
                      touched.birthday
                        ? errors.birthday
                          ? 'error'
                          : 'success'
                        : ''
                    }`}
                    locale={language}
                    name="birthday"
                    id="birthday"
                    type="date"
                    calendarStartDay={1}
                    value={values.birthday}
                    formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
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

                  {/* Chevron */}
                  <ChevronDown
                    className={`${
                      touched.birthday ? (errors.birthday ? '' : 'success') : ''
                    }`}
                  >
                    <use href={`${Icons}#user-chevron-down-sf`}></use>
                  </ChevronDown>

                  {/* Error message */}
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
                    touched.email ? (errors.email ? 'error' : 'success') : ''
                  }`}
                >
                  Email
                  <StyledInput
                    className={`${
                      touched.email ? (errors.email ? 'error' : 'success') : ''
                    }`}
                    disabled
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={
                      i18n.language === 'en'
                        ? 'Enter your email'
                        : 'Введіть вашу електронну адресу'
                    }
                  />
                  {/* Error image */}
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
                  {/* Error message */}
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
                  {i18n.language === 'en' ? 'Phone' : 'Номер телефону'}
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

                  {/* Error image */}
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

                  {/* Error message */}
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
                    placeholder={
                      i18n.language === 'en'
                        ? 'Add a skype number'
                        : 'Додайте номер Skype'
                    }
                  />
                  {/* Error image */}
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
                  {/* Error message */}
                  <ErrorMessage>{touched.skype && errors.skype}</ErrorMessage>
                </StyledLabel>
              </InputWrapper>
            </Inputs>
            <SubmitBtn
              type="submit"
              disabled={!dirty || !values.name || !values.email || errors.email}
            >
              {i18n.language === 'en' ? 'Save changes' : 'Зберегти зміни'}
            </SubmitBtn>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};
