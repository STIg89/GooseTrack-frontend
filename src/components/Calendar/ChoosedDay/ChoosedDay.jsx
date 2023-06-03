import Container from './ChoosedDay.Styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

const ChoosedDay = () => {
  const tasks = [
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'low',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'medium',
    },
    {
      taskText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, libero.',
      priority: 'high',
    },
  ];
  return (
    <Container>
      <TasksColumnsList tasks={tasks} />
    </Container>
  );
};

export default ChoosedDay;
