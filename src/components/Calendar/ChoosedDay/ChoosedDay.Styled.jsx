import styled from 'styled-components';

const Container = styled.div`
   {
    background-color: var(--secondary-background-color);
    @media screen and (min-width: 375px) {
      max-width: 335px;
      height: 470px;
    }
    @media screen and (min-width: 768px) {
      max-width: 718px;
      height: 800px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 1151px;
      height: 666px;
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
