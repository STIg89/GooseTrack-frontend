import styled from 'styled-components';

export const TaskList = styled.ul`
  list-style: none;
  padding: 20px 1px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 28px 2px 5px;
  }
`;
export const TaskItem = styled.li`
  width: 100%;
  padding: 4px 4px 4px 8px;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  border-radius: 8px;
  background-color: ${props =>
    props.priority === 'low'
      ? 'var(--priority-low-bg-color)'
      : props.priority === 'medium'
      ? 'var(--priority-medium-bg-color)'
      : 'var(--priority-high-bg-color)'};
  color: ${props =>
    props.priority === 'low'
      ? 'var(--task-priority-low-color)'
      : props.priority === 'medium'
      ? 'var( --task-priority-medium-color)'
      : 'var(--task-priority-high-color)'};
  text-transform: capitalize;
`;
