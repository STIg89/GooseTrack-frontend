import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';

const TasksColumn = ({ headName, tasks }) => {
  return (
    <>
      <ColumnHeadBar headName={headName} />
      {tasks && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn />
    </>
  );
};
export default TasksColumn;
