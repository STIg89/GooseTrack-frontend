import React, { useEffect } from 'react';
import sprite from 'images/sprite.svg';
import { format } from 'date-fns';
import {
  PeriodView,
  PeriodTabs,
  PeriodTabsContainer,
  GroupPeriod,
} from './PeriodPaginator.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';

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

  useEffect(() => {
    if (!params.currentDay) {
      return;
    }
    const parsedDate = parseDate(selectedDay);
    navigate(`/calendar/day/${parsedDate}`);
  }, [selectedDay, navigate, params.currentDay]);

  const monthFormat = 'MMMM y';
  const dayFormat = 'd MMM y';

  const formattedMonth = format(currentDate, monthFormat);

  const formattedDay = format(selectedDay, dayFormat);

  return (
    <GroupPeriod>
      <PeriodView>
        {params.currentDay ? formattedDay : formattedMonth}
      </PeriodView>
      <PeriodTabsContainer>
        <PeriodTabs onClick={params.currentDay ? prevDay : prevMonth}>
          <svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </svg>
        </PeriodTabs>
        <PeriodTabs
          style={{ transform: 'rotate(180deg)' }}
          onClick={params.currentDay ? nextDay : nextMonth}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </svg>
        </PeriodTabs>
      </PeriodTabsContainer>
    </GroupPeriod>
  );
};
export default PeriodPaginator;
