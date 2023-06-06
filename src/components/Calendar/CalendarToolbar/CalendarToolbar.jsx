import React from 'react';
import { addMonths, subMonths } from 'date-fns';
import PeriodPaginator from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { PeriodContainer } from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator.styled';
import PeriodTypeSelect from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect';

const CalendarToolbar = ({ setCurrentDate, currentDate }) => {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div>
      <PeriodContainer>
        <PeriodPaginator nextMonth={nextMonth} prevMonth={prevMonth} />
        <PeriodTypeSelect />
      </PeriodContainer>
    </div>
  );
};
export default CalendarToolbar;
