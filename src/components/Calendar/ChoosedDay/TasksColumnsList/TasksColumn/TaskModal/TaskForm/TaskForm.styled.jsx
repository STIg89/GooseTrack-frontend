import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
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
  padding: 12px 14px;
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

  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
`;

export const RadioInput = styled.input`
  margin-right: 6px;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  outline: 2px solid
    ${props => {
      if (props.checked) {
        switch (props.value) {
          case 'low':
            return 'rgba(114, 194, 248, 0.5)';
          case 'medium':
            return 'rgba(243, 178, 73, 0.5)';
          case 'high':
            return 'rgba(234, 61, 101, 0.5)';
          default:
            return '';
        }
      }

      switch (props.value) {
        case 'low':
          return 'rgb(114, 194, 248)';
        case 'medium':
          return 'rgb(243, 178, 73)';
        case 'high':
          return 'rgb(234, 61, 101)';
        default:
          return '';
      }
    }};

  border: 2px solid
    ${props => {
      if (props.checked) {
        return '#fff';
      }

      switch (props.value) {
        case 'low':
          return '#72C2F8';
        case 'medium':
          return '#F3B249';
        case 'high':
          return '#EA3D65';
        default:
          return '';
      }
    }};

  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return '';
    }
  }};

  &:hover,
  &:focus {
    transition: border 250ms, outline 250ms;
  }
`;
