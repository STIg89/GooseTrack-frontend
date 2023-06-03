import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: var(--auth-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 375px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
`;
