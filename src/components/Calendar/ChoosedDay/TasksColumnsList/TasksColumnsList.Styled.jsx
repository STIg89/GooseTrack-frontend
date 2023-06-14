import styled from 'styled-components';

export const ColumnsList = styled.ul`
   {
    display: flex;
    padding: 0px;
    padding-bottom: 44px;
    gap: 16px;
    overflow: auto;
    width: 100%;
    cursor: default;

    @media screen and (min-width: 1440px) {
      gap: 27px;
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
