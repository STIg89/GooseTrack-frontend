// import { selectTasks } from 'redux/tasks/selectors';
import Container from './ChoosedDay.Styled';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDayTasks } from 'redux/tasks/operations';
// import { useParams } from 'react-router-dom';

const ChoosedDay = () => {
  // let { currentDay } = useParams();
  let currentDay = '7';
  console.log('currentDay', currentDay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDayTasks(currentDay));
  }, [dispatch]);

  return (
    <Container>
      <DayCalendarHead
      // currentDay={currentDay}
      />
      <TasksColumnsList />
    </Container>
  );
};

export default ChoosedDay;
