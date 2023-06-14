import styled from 'styled-components';

export const SwaggerButtonContainer = styled.div`
  position: relative;
`;

export const SwaggerButtonStyle = styled.a`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--swagger-text-color);
  background-color: #85ea2d;
  width: 40px;
  height: 40px;
  bottom: 40px;
  left: 20px;
  border-radius: 50%;
  transition: all 0.3s;
  overflow: hidden;

  svg {
    width: 40px;
    height: 40px;
    transition: opacity 0.2s;
  }

  &:hover svg {
    opacity: 0;
  }
`;

export const SwaggerText = styled.span`
  position: absolute;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
  padding: 0 5px;
  opacity: 0;
  transition: all 0.3s;
`;
