import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.Styled';

const TasksColumn = ({ headName, tasks, addCategory }) => {
  return (
    <ColumnsItem>
      <ColumnHeadBar headName={headName} addCategory={addCategory} />
      {tasks && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn addCategory={addCategory} />
    </ColumnsItem>
  );
};
export default TasksColumn;
