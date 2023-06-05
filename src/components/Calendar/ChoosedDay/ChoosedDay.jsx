import Container from './ChoosedDay.Styled';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDayTasks } from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import { selectTasks } from 'redux/tasks/selectors';

const ChoosedDay = () => {
  let { currentDay } = useParams();

  console.log('currentDay', currentDay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDayTasks(currentDay));
  }, [currentDay, dispatch]);

  const tasks = useSelector(selectTasks);

  const readinessTasks = {
    todotasks: tasks.filter(item => item.category === 'to-do'),
    inprogresstasks: tasks.filter(item => item.category === 'in-progress'),
    donetasks: tasks.filter(item => item.category === 'done'),
  };

  return (
    <Container>
      <DayCalendarHead />
      <TasksColumnsList readinessTasks={readinessTasks} />
    </Container>
  );
};

export default ChoosedDay;
