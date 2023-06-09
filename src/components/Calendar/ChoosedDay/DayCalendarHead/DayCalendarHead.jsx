import { Day, DayList } from './DayCalendarHead.Styled';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DayWrap } from './DayCalendarHead.Styled';
// import { useTranslation } from 'react-i18next';

const DayCalendarHead = ({ selectedDay, setSelectedDay }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState(window.innerWidth);
  const week = [];

  // const { t } = useTranslation();

  // days of the week from 0-6 for getDat()
  const getWeek = () => {
    if (viewport < 376) {
      return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };

  // we find the day of the week by number
  const currentDayOfWeek = selectedDay.getDay();

  const onPickOftheDay = currentDay => {
    setSelectedDay(currentDay);
    const choosenDay = format(currentDay, 'yyyy-MM-dd');
    navigate(`/calendar/day/${choosenDay}`);
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(selectedDay);
    date.setDate(
      selectedDay.getDate() +
        i -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1)
    );
    const isDaySelected =
      selectedDay && selectedDay.getDate() === date.getDate();

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
    const handleResize = () => setViewport(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <DayList>
      {week.map(items => (
        <li key={Math.random()}>{items}</li>
      ))}
    </DayList>
  );
};
export default DayCalendarHead;
