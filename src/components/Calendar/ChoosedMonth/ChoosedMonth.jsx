import React from 'react';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';
const ChoosedMonth = ({ currentDate, setCurrentDate }) => {
  return (
    <div className="calendar">
      <MonthCalendarHead currentDate={currentDate} />

      <CalendarTable
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
    </div>
  );
};

export default ChoosedMonth;
