import React, { useEffect, useState } from 'react';
import sprite from 'images/sprite.svg';
import { format } from 'date-fns';
import {
  Svg,
  PeriodView,
  PeriodTabs,
  PeriodTabsContainer,
  GroupPeriod,
} from './PeriodPaginator.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';
import { enGB, eo, uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

const locales = { enGB, eo, uk };
const PeriodPaginator = ({
  selectedDay,
  nextMonth,
  prevMonth,
  prevDay,
  currentDate,
  nextDay,
}) => {
  const params = useParams();
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    if (!params.currentDay) {
      return;
    }
    const parsedDate = parseDate(selectedDay);
    navigate(`/calendar/day/${parsedDate}`);
  }, [selectedDay, navigate, params.currentDay]);
  useEffect(() => {
    if (i18n.language === 'ua') {
      setLanguage('uk');
    } else {
      setLanguage('enGB');
    }
  }, [i18n.language]);

  const monthFormat = 'LLLL y';
  const dayFormat = 'd MMM y';

  const formattedMonth = format(currentDate, monthFormat, {
    locale: locales[language],
  });

  const formattedDay = format(selectedDay, dayFormat, {
    locale: locales[language],
  });

  return (
    <GroupPeriod>
      <PeriodView>
        {params.currentDay ? formattedDay : formattedMonth}
      </PeriodView>
      <PeriodTabsContainer>
        <PeriodTabs onClick={params.currentDay ? prevDay : prevMonth}>
          <Svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </Svg>
        </PeriodTabs>
        <PeriodTabs
          style={{ transform: 'rotate(180deg)' }}
          onClick={params.currentDay ? nextDay : nextMonth}
        >
          <Svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </Svg>
        </PeriodTabs>
      </PeriodTabsContainer>
    </GroupPeriod>
  );
};
export default PeriodPaginator;
