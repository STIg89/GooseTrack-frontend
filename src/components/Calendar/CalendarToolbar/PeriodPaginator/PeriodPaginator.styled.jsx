import styled from 'styled-components';

export const PeriodView = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  text-transform: uppercase;
  background-color: var(--color-button-period-type);
  color: var(--btn-text-color);
`;
export const PeriodTabs = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  border-top-left: 8px;
  color: var(--calendar-digit-color);
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;

  background-color: var(--primary-background-color);
  border: 1px solid rgba(220, 227, 229, 0.5);
  & > svg {
    stroke: currentColor;
    fill: transparent;
  }
`;
export const PeriodTabsContainer = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;
export const PeriodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 8px;
  }
`;

