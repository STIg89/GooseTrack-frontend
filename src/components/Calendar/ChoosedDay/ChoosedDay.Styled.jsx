import styled from 'styled-components';

const Container = styled.div`
   {
    background-color: var(--secondary-background-color);
    @media screen and (min-width: 375px) {
      width: 335px;
    }
    @media screen and (min-width: 768px) {
      width: 704px;
    }
    @media screen and (min-width: 1440px) {
      width: 1087px;
    }

    overflow: auto;

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
export default Container;
