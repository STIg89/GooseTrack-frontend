import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser, uploadAvatar } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Icons from 'images/sprite.svg';

import {
  Wrapper,
  StyledForm,
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
} from './UserForm.styled';

// Validation for phone
const phoneRegex = /^\+?3?8?(0\d{9})$/;

// Validation Schema YUP
const validationSchema = yup.object().shape({
  name: yup.string().max(16, 'Name must not exceed 16 characters').required(),
  phone: yup.string().matches(phoneRegex, 'Phone number is not valid'),
  birthday: yup.date(),
  skype: yup.string().max(16, 'Skype must not exceed 16 characters'),
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required'),
});

export const UserForm = () => {
  const user = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState('');
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
    let promise = dispatch(uploadAvatar(e.target.files[0]));
    promise.then(function (response) {
      setAvatarUrl(response.payload.data.data.updatedUser.avatarURL);
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
      }) => (
        <Wrapper>
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            {/* Avatar */}
            <AvatarWrapper>
              {avatarUrl ? (
                <AvatarImage alt="avatar" src={avatarUrl} />
              ) : (
                <AvatarPlaceholder>
                  {username ? username[0].toUpperCase() : ''}
                </AvatarPlaceholder>
              )}

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
            </AvatarWrapper>

            {/* User data */}
            <UserTitle>{user.name}</UserTitle>
            <User>{t('user')}</User>

            {/* Inputs */}
            <Inputs>
              {/* Name */}
              <InputWrapper>
                <StyledLabel htmlFor="name">
                  {t('user_name')}
                  <StyledInput
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                  />
                  <div>{errors.name && touched.name && errors.name}</div>
                </StyledLabel>
              </InputWrapper>

              {/* Birthday */}
              <StyledLabel>
                {t('birthday')}
                <DatePickerWrapper>
                  <StyledDatePicker
                    name="birthday"
                    id="birthday"
                    type="date"
                    value={values.birthday}
                    selected={new Date(values.birthday)}
                    dateFormat="yyyy-MM-dd"
                    onChange={e => {
                      setFieldValue('birthday', e);
                    }}
                    maxDate={new Date()}
                  />
                </DatePickerWrapper>
              </StyledLabel>

              {/* Email */}
              <InputWrapper>
                <StyledLabel>
                  Еmail
                  <StyledInput
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" />
                </StyledLabel>
              </InputWrapper>

              {/* Phone */}
              <InputWrapper>
                <StyledLabel>
                  {t('phone')}
                  <StyledInput
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+380XXXXXXXXX"
                  />
                  <ErrorMessage name="phone" component="div" />
                </StyledLabel>
              </InputWrapper>

              {/* Skype */}
              <InputWrapper>
                <StyledLabel>
                  Skype
                  <StyledInput
                    type="text"
                    name="skype"
                    id="skype"
                    value={values.skype}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Add a skype number"
                  />
                  <ErrorMessage name="skype" component="div" />
                </StyledLabel>
              </InputWrapper>
            </Inputs>
            <SubmitBtn type="submit" disabled={!dirty}>
              Save changes
            </SubmitBtn>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};
