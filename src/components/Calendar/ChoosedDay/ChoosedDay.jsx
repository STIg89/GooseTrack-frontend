import Container from './ChoosedDay.Styled';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

const ChoosedDay = () => {
  const tasks = [
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'low',
      status: 'To do',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'medium',
      status: 'In progress',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'low',
      status: 'To do',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'high',
      status: 'Done',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'high',
      status: 'To do',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'high',
      status: 'In progress',
    },
  ];
  return (
    <Container>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasks} />
    </Container>
  );
};

export default ChoosedDay;
