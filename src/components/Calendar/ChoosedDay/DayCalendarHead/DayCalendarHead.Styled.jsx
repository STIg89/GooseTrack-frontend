import styled from 'styled-components';
export const DayList = styled.ul`
  display: flex;
  font-size: 16px;
  max-width: 100%;
  height: 74px;
  background-color: var(--primary-background-color);
  border-radius: 8px;
  padding: 14px 18px;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    height: 68px;
    font-size: 14px;
  }
`;

export const DayWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Day = styled.span`
  border-radius: 6px;
  text-align: center;
  width: 20px;
  height: 22px;
  :hover {
    background-color: var(--accent-background-color);
    color: var(--btn-text-color);
  }
`;
