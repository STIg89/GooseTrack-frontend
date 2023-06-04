import { useState, useEffect } from 'react';
import Icons from 'images/sprite.svg';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  Wrapper,
  StyledForm,
  AvatarWrapper,
  AvatarLabel,
  AvatarBtn,
  AddAvatar,
  UserTitle,
  User,
  Inputs,
  StyledInput,
  StyledLabel,
  SubmitBtn,
} from './UserForm.styled';

const phoneRegex = /^\+?3?8?(0\d{9})$/;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(16, 'Name must not exceed 16 characters')
    .required('Name is required'),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Phone is required'),
  //   birthday: yup.date().format('DD-MM-YYYY'),
  //   birthday: yup.date().default(() => new Date()),
  skype: yup.string().max(16, 'Skype must not exceed 16 characters'),
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required'),
});

export const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
  });

  // Get from local storage
  useEffect(() => {
    const storageFormData = localStorage.getItem('formData');
    if (storageFormData) {
      setFormData(JSON.parse(storageFormData));
    }
  }, []);

  // Write to local storage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Initial values for form
  const initialValues = {
    name: formData.name || '',
    phone: formData.phone || '',
    birthday: formData.birthday || '',
    skype: formData.skype || '',
    email: formData.email || '',
  };

  // Submit form
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
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
        isSubmitting,
      }) => (
        <Wrapper>
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            {/* Avatar */}
            <AvatarWrapper>
              <img alt="" src="" />

              <AvatarLabel htmlFor="avatar">
                {/* Plus button */}
                <AvatarBtn>
                  <use href={`${Icons}#profile-plus-s`}></use>
                </AvatarBtn>

                <AddAvatar id="avatar" type="file" name="avatar"></AddAvatar>
              </AvatarLabel>
            </AvatarWrapper>

            {/* User name */}
            <UserTitle>User Name</UserTitle>
            <User>User</User>

            {/* Inputs */}
            <Inputs>
              {/* Name */}
              <StyledLabel htmlFor="name">
                User Name
                <StyledInput
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                />
                {/* {touched.name && !errors.name && <div color="green" />} */}
                {/* {touched.name && errors.name && <div color="red" />} */}
                <ErrorMessage name="name" component="div" />
              </StyledLabel>

              {/* Phone */}
              <StyledLabel>
                Phone
                <StyledInput
                  type="number"
                  name="phone"
                  id="phone"
                  value={values.phone ? values.phone : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+380XXXXXXXXX"
                />
                <ErrorMessage name="phone" component="div" />
              </StyledLabel>

              {/* Birthday */}
              <StyledLabel>
                Birthday
                <StyledInput
                  type="date"
                  name="birthday"
                  id="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="YYYY-MM-DD"
                />
                <ErrorMessage name="birthday" component="div" />
              </StyledLabel>

              {/* Skype */}
              <StyledLabel>
                Skype
                <StyledInput
                  type="text"
                  name="skype"
                  id="skype"
                  value={values.skype ? values.skype : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Add a skype number"
                />
                <ErrorMessage name="skype" component="div" />
              </StyledLabel>

              {/* Email */}
              <StyledLabel>
                Email
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
            </Inputs>

            <SubmitBtn type="submit" disabled={isSubmitting}>
              Save changes
            </SubmitBtn>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};
