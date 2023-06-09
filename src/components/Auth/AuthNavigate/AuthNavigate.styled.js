import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthLink = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  border-bottom: 1px solid var(--color-button-period-type);
  text-decoration: none;
  color: var(--accent-background-color);
  text-shadow: var(--logo-txt-shadow);
  &:hover,
  :focus {
    color: var(--accent-background-color);
    border-color: var(--accent-background-color);
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 375px) {
    width: fit-content;
    text-align: center;
  }
`;
