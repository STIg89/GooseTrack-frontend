import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TypesTabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;
`;
const TypesTabs = styled(Link)`
  color: var(--color-button-period-type);
  padding: 8px 16px;
  background-color: var(--button-period-type);
  min-width: 76px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  &:hover,
  &:focus,
  &:active,
  &.active {
    background-color: var(--active-button-period-type);
  }
`;
export default {
  TypesTabsContainer,
  TypesTabs,
};
