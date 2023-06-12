import styled from 'styled-components';

export const CardWraper = styled.li`
  padding: 15px;
  background-color: var(--secondary-background-color);
  border-radius: 8px;
`;
export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ToolsWraper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const TaskText = styled.div`
  color: var(--primary-text-color);
  font-family: Inter;
  font-style: medium;
  font-size: 14px;
  max-width: 272px;
  margin: 0 0 28px 0;
`;
export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
export const NoAvatar = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-radius: 50%;
  color: var(--secondary-text-color);
  background-color: var(--avatar-background-color);
  font-size: 25px;
  outline: 2px solid var(--accent-background-color);
`;

export const PriorityWraper = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${props => {
    if (props.text.includes('low')) {
      return 'var(--task-priority-low-color)';
    } else if (props.text.includes('medium')) {
      return 'var(--task-priority-medium-color)';
    } else if (props.text.includes('Зробити')) {
      return 'var(--task-priority-low-color)';
    } else if (props.text.includes('В процесі')) {
      return 'var(--task-priority-medium-color)';
    } else return 'var(--task-priority-high-color)';
  }}};
    overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`;
