import React from 'react';
import {
  TypesTabs,
  TypesTabsContainer,
  TabsFlex,
} from '../PeriodTypeSelect/PeriodTypesSelect.styled';
import { parseDate } from 'helpers/parseDate';

const PeriodTypeSelect = ({ currentDate }) => {
  const parsedDate = parseDate(currentDate);
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
