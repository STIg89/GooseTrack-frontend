import styled from 'styled-components';

export const CardWraper = styled.li`
  padding: 15px;
  background-color: var(--secondary-background-color);
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
export const TaskText = styled.p`
  color: var(--primary-text-color);
  font-family: Inter;
  font-style: medium;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 28px 0;
  width: 272px;
  height: 16px;
  overflow: auto;
`;
export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
export const PriorityWraper = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${props => {
    if (props.text.includes('low')) {
      return 'var(--priority-low-bg-color)';
    } else if (props.text.includes('medium')) {
      return 'var(--priority-medium-bg-color)';
    } else {
      return 'var(--priority-high-bg-color)';
    }
  }};
`;
