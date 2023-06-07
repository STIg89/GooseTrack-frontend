import styled from 'styled-components';

export const GroupPeriod = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 260px;
    justify-content: space-between;
  }
`;
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
  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.12;
  }
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
  cursor: pointer;
  background-color: var(--primary-background-color);
  border: 1px solid rgba(220, 227, 229, 0.5);
  & > svg {
    stroke: currentColor;
    fill: transparent;
  }
  & > svg:hover,
  & > svg:focus {
    stroke: var(--accent-span-text-color);
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
  gap: 18px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-wrap: no-wrap;
    margin-bottom: 32px;
  }
`;
