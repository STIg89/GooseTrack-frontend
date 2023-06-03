import { TaskslistWraper } from './ColumnsTasksList.Styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  return (
    <TaskslistWraper>
      {tasks.map(item => {
        return (
          <TaskColumnCard taskText={item.taskText} priority={item.priority} />
        );
      })}
    </TaskslistWraper>
  );
};
export default ColumnsTasksList;
