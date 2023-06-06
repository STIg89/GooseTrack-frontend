import React from 'react';

import './ChoosedMonth.css';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';
const ChoosedMonth = ({ currentDate, setSelectedDate, selectedDate }) => {
  return (
    <div className="calendar">
      <MonthCalendarHead currentDate={currentDate} />

      <CalendarTable
        currentDate={currentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default ChoosedMonth;
