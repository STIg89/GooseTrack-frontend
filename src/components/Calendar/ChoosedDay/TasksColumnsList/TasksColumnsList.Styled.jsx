import styled from 'styled-components';

export const ColumnsList = styled.ul`
   {
    display: flex;
    padding: 0px;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1440px) {
      justify-content: space-between;
      height: 568px;
    }
  }
`;
