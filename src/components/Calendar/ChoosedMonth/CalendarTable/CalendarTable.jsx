import React from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameDay,
} from 'date-fns';
import { ColumnCell, Number, Row, Calendar } from './CalendarTable.styled';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const parseDate = date => {
    const parsedYear = date.getFullYear().toString();
    const parsedMonth =
      date.getMonth() < 9
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    const parsedDay =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const parsedDate = `${parsedYear}-${parsedMonth}-${parsedDay}`;
    return parsedDate;
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const initDate = day;

      //new Date(getYear(day), getMonth(day), getDay(day))
      formattedDate = format(day, dateFormat);
      days.push(
        <ColumnCell
          className={`column cell ${
            day.getMonth() !== monthStart.getMonth()
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={nanoid()}
          onClick={() => {
            onDateClick(initDate);
            navigate(`day/${parseDate(initDate)}`);
          }}
        >
          <Number className="number">{formattedDate}</Number>
        </ColumnCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<Row key={nanoid()}>{days}</Row>);
    days = [];
  }
  const onDateClick = date => {
    setSelectedDate(date);
  };

  return <Calendar>{rows}</Calendar>;
};
export default CalendarTable;
