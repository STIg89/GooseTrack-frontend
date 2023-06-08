import { TaskslistWraper } from './ColumnsTasksList.Styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks, addCategory }) => {
  return (
    <TaskslistWraper
      style={tasks.length === 0 ? { height: '25px' } : { height: `375px` }}
    >
      {tasks.map(item => {
        return (
          <TaskColumnCard
            taskText={item.title}
            priority={item.priority}
            id={item._id}
            key={item._id}
            addCategory={addCategory}
          />
        );
      })}
    </TaskslistWraper>
  );
};
export default ColumnsTasksList;
