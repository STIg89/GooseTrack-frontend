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
  const { t } = useTranslation();
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
          {t('month')}
        </TypesTabs>
        <TypesTabs
          to={`day/${parsedDate}`}
          onClick={() => {
            setSelectedDay(currentDate);
          }}
          disabled={params.currentDay ? true : false}
        >
          {t('day')}
        </TypesTabs>
      </TypesTabsContainer>
    </TabsFlex>
  );
};
export default PeriodTypeSelect;
