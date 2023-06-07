import styled from 'styled-components';
import { Field, Form } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  outline: 1px solid var(--accent-background-color);
  display: flex;
  background: var(---primary-background-color);
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
    height: calc(100vh - 148px);
  }
`;

export const StyledForm = styled(Form)`
  /* outline: 1px solid red; */
  padding: 0 18px 40px 18px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 40px 175px;
  }
  @media screen and (min-width: 1440px) {
    padding: 60px 165px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -30px;
  width: 72px;
  height: 72px;
  border: 2px solid var(--accent-background-color);
  border-radius: 50%;
  background: var(---primary-background-color);

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
  border-radius: 50%;
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  padding: 2px;
  border-radius: 50%;
  background-color: var(--accent-background-color);
  stroke: var(--btn-text-color);

  @media screen and (min-width: 768px) {
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
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  color: var(--label-text);
  margin: 0;
  padding: 0;

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
  background: var(---primary-background-color);
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
`;

export const StyledDatePicker = styled(DatePicker)`
  margin-top: 8px;
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: var(--border-account-input);
  border-radius: 8px;
  background: var(---primary-background-color);
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
`;

export const DatePickerWrapper = styled.div`
  & .react-datepicker {
    background-color: var(--color-button-period-type);
    border-radius: 16px;
    overflow: hidden;
    border: none;
    color: #ffffff;
    width: 327px;
    height: 327px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    line-height: 2.2;

    @media screen and (min-width: 768px) {
      width: 373px;
      height: 354px;
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

export const SubmitBtn = styled.button`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
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
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 22px;
  }
`;
