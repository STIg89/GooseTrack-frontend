import styled from 'styled-components';
import { Field, Form } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Container
export const Wrapper = styled.div`
  display: flex;
  background-color: var(--primary-background-color);
  border-radius: 16px;
  margin-top: 95px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 32px;
    margin-bottom: 32px;
    min-height: calc(100vh - 148px);
  }
`;

// Form
export const StyledForm = styled(Form)`
  padding: 0 18px 40px 18px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-background-color);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    padding: 40px 175px;
  }
  @media screen and (min-width: 1440px) {
    padding: 60px 165px;
  }
`;

// Avatar
export const AvatarContainer = styled.div`
  position: relative;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  top: -30px;
  width: 72px;
  height: 72px;
  border: 2px solid var(--accent-background-color);
  border-radius: 50%;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    top: 0px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const AvatarImage = styled.img`
  text-align: center;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const AvatarPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--avatar-background-color);
  color: var(--avatar-fill-color);
  font-size: 48px;
`;

export const AvatarLabel = styled.label`
  position: absolute;
  left: 43px;
  top: 57px;

  @media screen and (min-width: 768px) {
    left: 76px;
    top: 100px;
  }
`;

export const AvatarBtn = styled.svg`
  position: absolute;
  top: -28px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--accent-background-color);
  stroke: var(--btn-text-color);

  @media screen and (min-width: 768px) {
    top: 5px;

    width: 24px;
    height: 24px;
    padding: 3px;
  }
`;

export const AddAvatar = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

// User
export const UserTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  color: var(--calendar-digit-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
    line-height: 1;
  }
`;

export const User = styled.p`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  color: var(--label-text);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

//  Inputs
export const Inputs = styled.div`
  width: 299px;

  @media screen and (min-width: 768px) {
    width: 354px;
  }

  @media screen and (min-width: 1440px) {
    width: 758px;
    column-count: 2;
  }
`;

export const InputWrapper = styled.div`
  /* display: flex; */
`;

export const StyledLabel = styled.label`
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  color: var(--label-text);
  margin: 0;
  padding: 0;

  &.error {
    color: var(--text-error-color);
  }

  &.success {
    color: var(--text-correct-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const StyledInput = styled(Field)`
  margin-top: 8px;
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: var(--border-account-input);
  border-radius: 8px;
  background: var(--primary-background-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--primary-text-color);
  outline: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: 1.13;
  }

  :hover,
  :focus {
    border: 1px solid var(--primary-text-color);
  }

  &.error {
    border: 1px solid var(--text-error-color);
  }

  &.success {
    border: 1px solid var(--text-correct-color);
  }
`;

// DatePicker
export const StyledDatePicker = styled(DatePicker)`
  margin-top: 8px;
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: var(--border-account-input);
  border-radius: 8px;
  background: var(--primary-background-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--primary-text-color);
  outline: none;

  :hover,
  :focus {
    border: 1px solid var(--primary-text-color);
  }

  &.error {
    border: 1px solid var(--text-error-color);
  }

  &.success {
    border: 1px solid var(--text-correct-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const DatePickerWrapper = styled.div`
  & .react-datepicker {
    background-color: var(--color-button-period-type);
    border-radius: 16px;
    overflow: hidden;
    border: none;
    color: var(--primary-background-color);
    width: 327px;
    height: 310px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    line-height: 2.2;

    @media screen and (min-width: 768px) {
      position: absolute;
      top: -80px;
      width: 354px;
      height: 340px;
      font-size: 18px;
    }
  }

  .react-datepicker__header {
    background-color: var(--color-button-period-type);
    border-bottom: 1px solid var(--border-color);
  }

  .react-datepicker__navigation-icon {
    ::before {
      border-color: var(--primary-background-color);
    }
  }

  .react-datepicker__month-select,
  .react-datepicker__year-select {
    padding: 5px;
    width: 110px;
    background-color: var(--color-button-period-type);
    border: 1px solid var(--primary-background-color);
    border-radius: 24px;
    color: var(--primary-background-color);

    text-align: center;
    font-size: 14px;
    overflow-y: auto;
    cursor: pointer;

    &:hover {
      background-color: var(--color-button-period-type);
    }
    &:focus {
      outline: none;
    }

    ::-webkit-scrollbar {
      box-sizing: border-box;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--primary-background-color);
      border-radius: 10px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--color-button-period-type);
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary-text-color);
    }
  }

  .react-datepicker__current-month {
    color: var(--primary-background-color);
  }

  .react-datepicker__day-name {
    color: var(--primary-background-color);
  }

  .react-datepicker__day {
    color: var(--primary-background-color);
    :hover,
    :focus {
      background-color: var(--auth-bg-color);
      color: var(--hover-btn-background-color);
      border-radius: 24px;
      opacity: 0.7;
    }
  }

  .react-datepicker__day--today,
  .react-datepicker__day--selected {
    background-color: var(--primary-background-color);
    color: var(--accent-background-color);
    border-radius: 24px;
    opacity: 1;
  }

  .react-datepicker__day--weekend {
    color: var(--primary-background-color);
    opacity: 40%;
  }
`;

// Submit Button
export const SubmitBtn = styled.button`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: var(--accent-background-color);
  color: var(--btn-text-color);
  cursor: pointer;
  :hover,
  :focus {
    background: var(--hover-btn-background-color);
  }

  :disabled {
    opacity: 0.4;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 64px;
  }
`;

export const ErrorImg = styled.svg`
  position: absolute;
  top: 70%;
  left: 90%;
  fill: var(--text-error-color);
  align-self: center;
  width: 20px;
  height: 20px;

  &.datePickerCheck {
    left: 270px;
    @media screen and (min-width: 768px) {
      left: 320px;
    }
  }
`;

export const CorrectImg = styled.svg`
  position: absolute;
  top: 70%;
  left: 90%;
  fill: var(--text-correct-color);
  align-self: center;
  width: 20px;
  height: 20px;

  &.datePickerCheck {
    left: 270px;
    @media screen and (min-width: 768px) {
      left: 320px;
    }
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  margin-top: -12px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 18px;
  font-size: 12px;
  line-height: 1.17;
  overflow: hidden;
  color: var(--text-error-color);
  border-right: 0.15em solid var(--text-error-color);
  white-space: nowrap;
  letter-spacing: 0.08em;

  animation: typing 3.5s steps(22, end) infinite,
    blink 0.5s step-end infinite alternate;

  @media screen and (min-width: 768px) {
    margin-top: -16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: -19px;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
