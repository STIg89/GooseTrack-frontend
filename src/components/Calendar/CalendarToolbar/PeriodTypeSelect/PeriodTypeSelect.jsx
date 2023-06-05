import React from 'react';
import {
  TypesTabs,
  TypesTabsContainer,
} from '../PeriodTypeSelect/PeriodTypesSelect.styled';

const PeriodTypeSelect = () => {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '18px',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <TypesTabsContainer>
        <TypesTabs to="month/:currentDate">Month</TypesTabs>
        <TypesTabs to="day/:currentDay">Day</TypesTabs>
      </TypesTabsContainer>
    </div>
  );
};
export default PeriodTypeSelect;
