import styled from 'styled-components';

export const ColumnsList = styled.ul`
   {
    display: flex;
    padding: 0px;
    justify-content: space-between;
    height: 568px;
    gap: 16px;
    overflow: auto;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
    @media screen and (min-width: 820) {
      justify-content: flex-start;
    }
    @media screen and (min-width: 1150px) {
      justify-content: space-around;
    }

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--scrollbar-bg-color);

      border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 12px;

      background-color: var(--scrollbar-color);
    }

    ::-webkit-scrollbar-track:hover {
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
    }
  }
`;
