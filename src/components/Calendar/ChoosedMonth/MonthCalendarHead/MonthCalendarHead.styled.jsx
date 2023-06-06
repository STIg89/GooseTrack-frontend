import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  color: var(--calendar-digit-color);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  padding: 16px;
  background-color: var(--primary-background-color);
  @media screen and (min-width: 768px) {
    padding: 14px;
  }
`;

export const DaysRow = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1100px) {
    margin-bottom: 15px;
  }
`;
