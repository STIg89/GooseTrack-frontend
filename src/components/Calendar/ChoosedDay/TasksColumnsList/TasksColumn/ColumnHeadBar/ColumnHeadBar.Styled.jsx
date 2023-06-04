import styled from 'styled-components';

export const ColumnHeader = styled.div`
  width: 299px;
  height: 34px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Status = styled.p`
  font-family: Inter;
  font-style: Bold;
  font-size: 18px;
  line-height: 20px;
  color: var(--primary-text-color);
`;
export const AddBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid var(--close-btn-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-background-color);
  border-radius: 50%;
  padding: 0;
`;
export const SvgStyled = styled.svg`
  stroke: var(--close-btn-color);
  width: 12px;
  height: 12px;
`;
