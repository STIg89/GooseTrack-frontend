import React, { useEffect } from 'react';
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
import { parseDate } from 'helpers/parseDate';
import MonthTaskList from '../MonthTaskList/MonthTaskList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from 'redux/tasks/operations';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

const CalendarTable = ({ currentDate, setCurrentDate, setSelectedDay }) => {
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
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn === false || isRefreshing === true) {
      return;
    }

    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const reqObj = {
      month,
      year,
      page: 1,
      limit: 100,
    };
    dispatch(fetchAllTasks(reqObj));
  }, [currentDate, dispatch, isLoggedIn, isRefreshing]);

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const initDate = day;
      formattedDate = format(day, dateFormat);
      days.push(
        <ColumnCell
          className={`column cell ${
            day.getMonth() !== monthStart.getMonth()
              ? 'disabled'
              : isSameDay(day, currentDate)
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
          <MonthTaskList date={initDate} />
        </ColumnCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<Row key={nanoid()}>{days}</Row>);
    days = [];
  }
  const onDateClick = date => {
    setCurrentDate(date);
    setSelectedDay(date);
  };

  return <Calendar>{rows}</Calendar>;
};
export default CalendarTable;
