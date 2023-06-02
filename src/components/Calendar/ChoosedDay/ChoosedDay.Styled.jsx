import styled from 'styled-components';

export const Container = styled.div`
   {
    background-color: #f7f6f9;
    @media screen and (min-width: 375px) {
      max-width: 335px;
      height: 432px;
    }
    @media screen and (min-width: 768px) {
      max-width: 704px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 1087px;
    }

    overflow: auto;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #f2f2f2;

      border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 12px;

      background: #e7e5e5;
    }

    ::-webkit-scrollbar-track:hover {
      box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
    }
  }
`;
