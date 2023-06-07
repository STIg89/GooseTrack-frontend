import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.Styled';

const TasksColumn = ({ headName, tasks }) => {
  return (
    <ColumnsItem>
      <ColumnHeadBar headName={headName} />
      {tasks && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn />
    </ColumnsItem>
  );
};
export default TasksColumn;
