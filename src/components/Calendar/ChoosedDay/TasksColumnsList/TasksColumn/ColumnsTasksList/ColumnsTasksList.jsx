import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  return tasks.map(item => {
    return <TaskColumnCard taskText={item.taskText} priority={item.priority} />;
  });
};
export default ColumnsTasksList;
