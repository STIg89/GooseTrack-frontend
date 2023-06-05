import React, { useEffect } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import { ColumnCell, Number, Row, Calendar } from './CalendarTable.styled';

const CalendarTable = ({ currentDate, selectedDate, setSelectedDate }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd);
  const dateFormat = 'd';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';
  useEffect(() => {
    console.log(rows);
    rows.filter(
      item => item.key === startOfWeek(selectedDate, { weekStartsOn: 1 })
    );
    // row.find(item => item.key === selectedDate);
    // console.log(startOfWeek(selectedDate, { weekStartsOn: 1 }));
    // eslint-disable-next-line
  }, [selectedDate]);

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      days.push(
        <ColumnCell
          props={{ date: day }}
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={event => {
            onDateClick(event);
          }}
        >
          <Number className="number">{formattedDate}</Number>
        </ColumnCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<Row key={day}>{days}</Row>);
    days = [];
  }
  const onDateClick = event => {
    setSelectedDate(event.target);
    const currentTarget = event.target;
    currentTarget.classList.add('selected');
    const prevTarget = currentTarget;
    prevTarget.classList.remove('selected');
  };
  return <Calendar>{rows}</Calendar>;
};
export default CalendarTable;
