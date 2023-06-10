import styled from 'styled-components';

export const TaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90%;
  height: 48px;

  color: var(--primary-text-color);
  background-color: var(--active-item-sidebar-background);
  border: var(--border-AddTaskBtn);
  border-radius: 8px;
  font-family: Inter;
  font-size: 14px;
  line-height: 18px;
  align: center;
  vertical-align: top;
`;
export const TaskBtnsvg = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--primary-text-color);
`;
