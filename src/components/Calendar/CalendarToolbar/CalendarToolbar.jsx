import React from 'react';
import { addMonths, subMonths, addDays, subDays } from 'date-fns';
import PeriodPaginator from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { PeriodContainer } from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator.styled';
import PeriodTypeSelect from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect';

const CalendarToolbar = ({
  setCurrentDate,
  currentDate,
  selectedDay,
  setSelectedDay,
}) => {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const nextDay = () => {
    setSelectedDay(addDays(selectedDay, 1));
  };
  const prevDay = () => {
    console.log(selectedDay);
    setSelectedDay(subDays(selectedDay, 1));
  };
  return (
    <>
      <PeriodContainer>
        <PeriodPaginator
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          prevDay={prevDay}
          nextDay={nextDay}
          selectedDay={selectedDay}
          currentDate={currentDate}
        />
        <PeriodTypeSelect
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </PeriodContainer>
    </>
  );
};
export default CalendarToolbar;
