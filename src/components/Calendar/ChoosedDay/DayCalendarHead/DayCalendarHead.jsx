import { Day, DayItem, DayList } from './DayCalendarHead.Styled';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDayTasks } from 'redux/tasks/operations';

const DayCalendarHead = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const useDateValidation = () => {
    const params = useParams();
    const date = new Date(params.currentDay);

    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      } else {
        return date;
      }
    }
  };

  const validDate = useDateValidation();

  const [viewport, setViewport] = useState(window.innerWidth);

  const getWeek = () => {
    if (viewport < 376) {
      return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    }
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  };

  const currentDay = format(validDate, 'yyyy-MM-dd');
  console.log("currentDay = format(validDate, 'yyyy-MM-dd'): ", currentDay);

  useEffect(() => {
    dispatch(fetchDayTasks(currentDay));

    const handleResize = () => setViewport(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, currentDay]);

  const selectDay = validDate;

  const currentDayOfWeek = selectDay.getDay();
  const [selectedDay, setSelectedDay] = useState(new Date(validDate));
  const days = [];

  const handleDayClick = currentDay => {
    setSelectedDay(currentDay);
    currentDay = new Date(currentDay);
    const validDate = format(currentDay, 'ddMMMMyyyy');
    const result = validDate.charAt(0) + validDate.slice(1);
    navigate(`/calendar/day/${result}`);
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(selectDay);
    date.setDate(
      selectDay.getDate() +
        i -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1)
    );
    const isDaySelected =
      selectedDay &&
      selectedDay.getDate() &&
      selectDay.getDate() === date.getDate();

    days.push(
      <div key={i} onClick={() => handleDayClick(date)}>
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
      </div>
    );
  }

  return (
    <DayList>
      {days.map(items => (
        <DayItem key={Math.random()}>{items}</DayItem>
      ))}
    </DayList>
  );
};
export default DayCalendarHead;
