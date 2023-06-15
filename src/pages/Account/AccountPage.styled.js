import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

// Button
export const Button = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.29;
  width: 200px;
  text-align: center;
  cursor: pointer;

  background-color: var(--color-button-period-type);
  color: var(--btn-text-color);

  transition: background-color var(--animation), color var(--animation);

  @media screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.12;
    width: 150px;
  }

  &.active {
    background-color: var(--color-button-period-type);
    color: var(--btn-text-color);
  }

  &.notactive {
    background-color: var(--btn-text-color);
    color: var(--color-button-period-type);
  }

  &:hover {
    background-color: var(--priority-low-bg-color);
    color: var(--color-button-period-type);
  }
`;

// Separator
export const Separator = styled.span`
  font-weight: 700;
  font-size: 15px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;

  color: var(--color-button-period-type);
`;
