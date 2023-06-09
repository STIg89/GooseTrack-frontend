import React from 'react';
import {
  TypesTabs,
  TypesTabsContainer,
  TabsFlex,
} from '../PeriodTypeSelect/PeriodTypesSelect.styled';
import { parseDate } from 'helpers/parseDate';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = ({ selectedDate }) => {
  const { t } = useTranslation();

  const parsedDate = parseDate(selectedDate);
  return (
    <TabsFlex>
      <TypesTabsContainer>
        <TypesTabs to="/calendar" end>
          {t('Month')}
        </TypesTabs>
        <TypesTabs to={`day/${parsedDate}`}>{t('Day')}</TypesTabs>
      </TypesTabsContainer>
    </TabsFlex>
  );
};
export default PeriodTypeSelect;
