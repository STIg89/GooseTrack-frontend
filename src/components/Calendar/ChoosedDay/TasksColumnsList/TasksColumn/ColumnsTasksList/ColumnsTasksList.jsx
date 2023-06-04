import { TaskslistWraper } from './ColumnsTasksList.Styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  return (
    <TaskslistWraper>
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
