import styled from 'styled-components';
import { Field, Form } from 'formik';

// Container
export const Wrapper = styled.div`
  background-color: var(--primary-background-color);
  border-radius: 16px;
  margin-top: 55px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 32px;
    margin-bottom: 32px;
    min-height: calc(100vh - 215px);
  }
`;

// Form
export const StyledForm = styled(Form)`
  padding: 18px 18px 40px 18px;
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
    padding: 100px 165px 60px 165px;
  }
`;

//  Inputs
export const Inputs = styled.div`
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  color: var(--primary-text-color);
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
  width: 100%;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: var(--border-account-input);
  border-radius: 8px;
  background: var(--primary-background-color);
  font-weight: 600;
  font-size: 12px;
  line-height: 1.3;
  color: var(--primary-text-color);
  outline: none;

  @media screen and (min-width: 375px) {
    width: 299px;
    font-size: 14px;
  }

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

// Show or hide button
export const ShowButton = styled.button`
  position: absolute;
  top: 65%;
  right: 5px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const ViewIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--accent-text-color);
  stroke-width: 2;
  fill: var(--btn-text-color);
`;

export const HideIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--accent-text-color);
  stroke-width: 2;
  fill: var(--btn-text-color);
`;

// Submit Button
export const SubmitBtn = styled.button`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
  width: 65%;
  height: 46px;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: var(--accent-background-color);
  color: var(--btn-text-color);
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }

  :hover,
  :focus {
    background: var(--hover-btn-background-color);
  }

  :disabled {
    opacity: 0.4;
  }

  @media screen and (min-width: 375px) {
    width: 195px;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
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
    blink 1s step-end infinite alternate;

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

    to {
      width: 80%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
