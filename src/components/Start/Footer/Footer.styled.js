import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: var(--primary-background-color);
  padding-top: 29px;
  padding-bottom: 29px;
  border-top: 1px solid var(--modal-border-color);
`;

export  const FooterContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const FooterText = styled.p`
  max-width: 240px;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  line-height: 2em;
  color: var(--accent-background-color);
`;

export const HeartIcon = styled.svg`
  fill: var(--accent-heart);
`;

export const StudentsText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  transition: color var(--animation);
  &:hover,
  &:focus {
    color: var(--primary-text-color);
  }
`;