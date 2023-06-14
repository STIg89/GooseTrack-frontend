import React from 'react';
import {
  TypesTabs,
  TypesTabsContainer,
  TabsFlex,
} from '../PeriodTypeSelect/PeriodTypesSelect.styled';
import { parseDate } from 'helpers/parseDate';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = ({
  setSelectedDay,
  selectedDay,
  currentDate,
  setCurrentDate,
}) => {
  const { i18n } = useTranslation();
  const params = useParams();
  const parsedDate = parseDate(currentDate);
  return (
    <TabsFlex>
      <TypesTabsContainer>
        <TypesTabs
          to="/calendar"
          end
          onClick={() => {
            setCurrentDate(selectedDay);
          }}
        >
          {i18n.language === 'en' ? 'Month' : 'Місяць'}
        </TypesTabs>
        <TypesTabs
          to={`day/${parsedDate}`}
          onClick={() => {
            setSelectedDay(currentDate);
          }}
          className={window.location.pathname.includes('/day/') ? 'active' : ''}
          disabled={params.currentDay ? true : false}
        >
          {i18n.language === 'en' ? 'Day' : 'День'}
        </TypesTabs>
      </TypesTabsContainer>
    </TabsFlex>
  );
};
export default PeriodTypeSelect;
