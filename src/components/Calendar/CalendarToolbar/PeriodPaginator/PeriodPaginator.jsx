import React, { useState } from 'react';
import sprite from 'images/sprite.svg';
import { addMonths, subMonths, format, addDays, subDays } from 'date-fns';
import {
  PeriodView,
  PeriodTabs,
  PeriodTabsContainer,
  GroupPeriod,
} from './PeriodPaginator.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';
import { useDateValidation } from 'helpers/useDateValidation';

const PeriodPaginator = ({ setCurrentDate, currentDate }) => {
  const params = useParams();
  const date = useDateValidation();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(new Date(date));

  const nextMonth = () => {
    setCurrentDate(addMonths(selectedDay, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(selectedDay, 1));
  };
  const nextDay = () => {
    setSelectedDay(addDays(selectedDay, 1));
    const parsedDate = parseDate(selectedDay);
    navigate(`/calendar/day/${parsedDate}`);
  };
  const prevDay = () => {
    setSelectedDay(subDays(selectedDay, 1));
    const parsedDate = parseDate(selectedDay);
    navigate(`/calendar/day/${parsedDate}`);
  };
  const monthFormat = 'MMMM y';
  const dayFormat = 'd MMM y';
  const formattedMonth = format(selectedDay, monthFormat);
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
