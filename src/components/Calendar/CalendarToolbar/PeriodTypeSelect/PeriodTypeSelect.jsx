import React from 'react';
import {
  TypesTabs,
  TypesTabsContainer,
  TabsFlex,
} from '../PeriodTypeSelect/PeriodTypesSelect.styled';
import { parseDate } from 'helpers/parseDate';

const PeriodTypeSelect = ({ selectedDate }) => {
  const parsedDate = parseDate(selectedDate);
  return (
    <TabsFlex>
      <TypesTabsContainer>
        <TypesTabs to="/calendar" end>
          Month
        </TypesTabs>
        <TypesTabs to={`day/${parsedDate}`}>Day</TypesTabs>
      </TypesTabsContainer>
    </TabsFlex>
  );
};
export default PeriodTypeSelect;
