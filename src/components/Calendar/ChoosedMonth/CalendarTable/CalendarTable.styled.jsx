import styled from 'styled-components';

export const ColumnCell = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  position: relative;
  height: 7em;
  padding-top: 25px;
  border: var(--border);
  overflow: hidden;
  background: var(--primary-background-color);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  transition: 0.1s ease-out;
  color: var(--calendar-digit-color);

  pointer-events: pointer;
  &.disabled {
    color: transparent;
    pointer-events: none;
  }

  &.selected > .number {
    color: white;
    background-color: var(--color-button-period-type);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    padding-top: 33px;
  }
  @media screen and (min-width: 1100px) {
    padding: 33px 3px 0px;
  }
`;

export const Number = styled.div`
  position: absolute;
  line-height: 1;
  top: 4px;
  right: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  transition: 0.1s ease-in;
  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    top: 8px;
    right: 8px;
  }
`;
export const Row = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Calendar = styled.div`
  border: 0.5px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  overflow: hidden;
`;
