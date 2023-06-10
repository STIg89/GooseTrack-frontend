import styled from 'styled-components';

export const ColumnsItem = styled.li`
   {
    padding: 18px;
    background-color: var(--primary-background-color);
    border-radius: 8px;
    min-width: 335px;

    @media screen and (min-width: 768px) {
      width: calc((100%-54px) / 3);
    }
  }
`;
