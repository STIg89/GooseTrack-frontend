import React from 'react';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';
const ChoosedMonth = ({ currentDate, setCurrentDate, setSelectedDay }) => {
  return (
    <div className="calendar">
      <MonthCalendarHead currentDate={currentDate} />

      <CalendarTable
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
};

export default ChoosedMonth;
