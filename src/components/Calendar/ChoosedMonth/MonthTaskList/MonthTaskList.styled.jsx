import styled from 'styled-components';

export const TaskList = styled.ul`
  list-style: none;
  padding: 0px 1px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: ${props => (props.tasks.length > 2 ? 'scroll' : 'no-scroll')};
  max-height: 100%;
  gap: 1px;
  @media screen and (min-width: 768px) {
    padding: 0px 2px 5px;
  }
  @media screen and (min-width: 1100px) {
  }
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--scrollbar-bg-color);

    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;

    background-color: var(--scrollbar-color);
  }

  ::-webkit-scrollbar-track:hover {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;
export const TaskItem = styled.li`
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
  white-space: nowrap;
  width: 100%;
  min-height: 22px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    min-height: 26px;
  }
  @media screen and (min-width: 1100px) {
    padding-left: 12px;
  }
`;
