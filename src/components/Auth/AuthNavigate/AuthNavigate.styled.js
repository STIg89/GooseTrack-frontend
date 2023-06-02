import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  border-bottom: 1px solid #3e85f3;
  text-decoration: none;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  &:hover,
  :focus {
    color: #111111;
    border-color: #111111;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
