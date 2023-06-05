import { useState } from 'react';
import { DayButton, DayItem, DayList } from './DayCalendarHead.Styled';

const DayCalendarHead = ({ currentDay }) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const [selectedDate, setSelectedDate] = useState(currentDay);

  return (
    <DayList>
      {days.map((day, index) => (
        <DayItem key={index}>
          <text>{day.split('', 1)}</text>
          <DayButton>{currentDay}</DayButton>
        </DayItem>
      ))}
    </DayList>
  );
};
export default DayCalendarHead;
