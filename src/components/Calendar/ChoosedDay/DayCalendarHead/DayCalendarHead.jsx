import { Day, DayList } from './DayCalendarHead.Styled';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDayTasks } from 'redux/tasks/operations';
import { DayWrap } from './DayCalendarHead.Styled';

const DayCalendarHead = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState(window.innerWidth);
  const week = [];

  // check the date from the request parameter. if invalid, we return the current date
  const useDateValidation = () => {
    const params = useParams();
    const date = new Date(params.currentDay);
    console.log('date from params: ', date);

    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      } else {
        return date;
      }
    }
  };

  const validDate = useDateValidation();
  console.log('validDate: ', validDate);
  const [selectedDay, setSelectedDay] = useState(new Date(validDate));

  // days of the week from 0-6 for getDat()
  const getWeek = () => {
    if (viewport < 376) {
      return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };

  // bring the date to the format'yyyy-MM-dd'
  const currentDay = format(validDate, 'yyyy-MM-dd');
  console.log("currentDay = format(validDate, 'yyyy-MM-dd'): ", currentDay);

  // we find the day of the week by number
  const currentDayOfWeek = validDate.getDay();
  console.log('currentDayOfWeek', currentDayOfWeek);

  const onPickOftheDay = currentDay => {
    setSelectedDay(currentDay);
    const choosenDay = format(currentDay, 'yyyy-MM-dd');
    navigate(`/calendar/day/${choosenDay}`);
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(validDate);
    date.setDate(
      validDate.getDate() +
        i -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1)
    );
    const isDaySelected =
      selectedDay &&
      selectedDay.getDate() &&
      validDate.getDate() === date.getDate();

    week.push(
      <DayWrap key={i} onClick={() => onPickOftheDay(date)}>
        <span>{getWeek()[date.getDay()]}</span>
        <Day
          style={
            isDaySelected
              ? {
                  backgroundColor: 'var(--accent-background-color)',
                  color: 'var(--btn-text-color)',
                }
              : {
                  backgroundColor: 'transparent',
                  color: 'var(--primary-text-color)',
                }
          }
        >
          {date.getDate()}
        </Day>
      </DayWrap>
    );
  }

  useEffect(() => {
    dispatch(fetchDayTasks(currentDay));

    const handleResize = () => setViewport(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, currentDay]);

  return (
    <DayList>
      {week.map(items => (
        <li key={Math.random()}>{items}</li>
      ))}
    </DayList>
  );
};
export default DayCalendarHead;
