import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputContaiter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTimeContaiter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`;

export const Label = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: #343434;
`;

export const Input = styled.input`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 14px 12px 14px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #343434;
`;

export const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
`;

export const RadioInput = styled.input`
  margin-right: 4px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px;
  border-radius: 50%;
  outline: none;
  /* border-color: ${props => {
    switch (props.value) {
      case 'low':
        return 'rgba(255, 20, 20, 0.5)';
      case 'medium':
        return '#ff9614';
      case 'high':
        return '#ffea14';
      default:
        return '';
    }
  }}; */
  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#ff1414';
      case 'medium':
        return '#ff9614';
      case 'high':
        return '#ffea14';
      default:
        return '';
    }
  }};
`;

export const RadioButtonContainer = styled.div`
  display: flex;
`;

/* &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#ff1414';
      case 'medium':
        return '#ff9614';
      case 'high':
        return '#ffea14';
      default:
        return '';
    }
  }}; */
/* } */

/* &:checked + ${RadioLabel} {
    background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#ff1414';
      case 'medium':
        return '#ff9614';
      case 'high':
        return '#ffea14';
      default:
        return '';
    }
  }};
  } */
