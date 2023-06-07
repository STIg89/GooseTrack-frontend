import { TaskslistWraper } from './ColumnsTasksList.Styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  let maxHeight = tasks.length === 0 ? 25 : tasks.length * 110 + 18;

  return (
    <TaskslistWraper
      style={
        tasks.length === 0 ? { height: '25px' } : { height: `${maxHeight}px` }
      }
    >
      {tasks.map(item => {
        return (
          <TaskColumnCard
            taskText={item.title}
            priority={item.priority}
            id={item._id}
            key={item._id}
          />
        );
      })}
    </TaskslistWraper>
  );
};
export default ColumnsTasksList;
