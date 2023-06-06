import React from 'react';
import {
  TypesTabs,
  TypesTabsContainer,
  TabsFlex,
} from '../PeriodTypeSelect/PeriodTypesSelect.styled';

const PeriodTypeSelect = () => {
  return (
    <TabsFlex>
      <TypesTabsContainer>
        <TypesTabs to="month/:currentDate">Month</TypesTabs>
        <TypesTabs to="day/:currentDay">Day</TypesTabs>
      </TypesTabsContainer>
    </TabsFlex>
  );
};
export default PeriodTypeSelect;
