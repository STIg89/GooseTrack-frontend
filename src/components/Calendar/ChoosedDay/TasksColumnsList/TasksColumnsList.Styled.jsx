import styled from 'styled-components';

export const ColumnsList = styled.ul`
   {
    display: flex;
    list-style: none;

    padding: 0px;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      gap: 16px;
      margin-left: 15px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 1072px;
      justify-content: space-between;
    }
  }
`;

export const ColumnsItem = styled.li`
   {
    padding: 18px;
    background-color: var(--primary-background-color);
    border-radius: 8px;
  }
`;
