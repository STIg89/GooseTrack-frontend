import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 335px;
  background: var(---primary-background-color);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    width: 1087px;
  }
`;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-top: 40px;
    margin-bottom: 14px;
    top: 0px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
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
  stroke: var(--primary-background-color);

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
  color: var(--calendar-digit-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const Inputs = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 299px;
  height: 392px;

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 458px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 758px;
    height: 264px;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  color: var(--primary-text-color);
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
  border: 1px solid rgba(17, 17, 17, 0.15);
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

export const SubmitBtn = styled.button`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: var(--accent-background-color);
  color: var(--primary-background-color);
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
    margin-bottom: 60px;
  }
`;
