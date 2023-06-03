import React from 'react';
import PeriodPaginator from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import periodPaginatorStyled from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator.styled';
import PeriodTypeSelect from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect';

const CalendarToolbar = ({ setCurrentDate, currentDate }) => {
  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };
  const { PeriodContainer } = periodPaginatorStyled;
  return (
    <div>
      <PeriodContainer>
        <PeriodPaginator />
        <PeriodTypeSelect />
      </PeriodContainer>
    </div>
  );
};
export default CalendarToolbar;
