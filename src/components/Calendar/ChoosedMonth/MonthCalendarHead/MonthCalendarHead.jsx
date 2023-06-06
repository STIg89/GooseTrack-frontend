import React from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { Column, DaysRow } from './MonthCalendarHead.styled';

const MonthCalendarHead = ({ currentDate }) => {
  const dateFormat = window.innerWidth >= 768 ? 'EEE' : 'EEEEE';
  const days = [];
  let startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  for (let i = 0; i < 7; i++) {
    const dayName =
      i === 5 || i === 6 ? (
        <Column key={i} style={{ color: '#3e85f3' }}>
          {format(addDays(startDate, i), dateFormat)}
        </Column>
      ) : (
        <Column key={i}>{format(addDays(startDate, i), dateFormat)}</Column>
      );
    days.push(dayName);
  }
  return <DaysRow>{days}</DaysRow>;
};

export default MonthCalendarHead;
