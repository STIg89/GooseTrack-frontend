import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';

const TasksColumn = ({ headName, tasks }) => {
  return (
    <>
      <ColumnHeadBar headName={headName} />
      <ColumnsTasksList tasks={tasks} />
    </>
  );
};
export default TasksColumn;
