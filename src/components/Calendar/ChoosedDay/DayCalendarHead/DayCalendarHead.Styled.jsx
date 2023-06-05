import styled from 'styled-components';
export const DayList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 335px;
  height: 74px;
  background-color: var(--primary-background-color);
  margin: 15px;
  border-radius: 8px;
  padding: 14px 18px;
  justify-content: space-between;
`;
export const DayItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DayButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: var(--primary-text-color);
  :hover {
    background-color: var(--accent-background-color);
    color: var(--btn-text-color);
  }
`;
