import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TypesTabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;
`;
export const TypesTabs = styled(NavLink)`
  color: var(--color-button-period-type);
  padding: 8px 16px;
  background-color: var(--button-period-type);
  min-width: 76px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  text-align: center;
  &:hover,
  &:focus,
  &:active,
  &.active {
    background-color: var(--active-button-period-type);
    color: var(--accent-text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;
export const TabsFlex = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;
