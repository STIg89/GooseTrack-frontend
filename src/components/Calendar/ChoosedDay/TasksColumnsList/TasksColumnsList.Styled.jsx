import styled from 'styled-components';

export const ColumnsList = styled.ul`
   {
    display: flex;
    list-style: none;

    padding: 0px;
    justify-content: space-evenly;
    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      gap: 10px;
      margin-left: 15px;
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
