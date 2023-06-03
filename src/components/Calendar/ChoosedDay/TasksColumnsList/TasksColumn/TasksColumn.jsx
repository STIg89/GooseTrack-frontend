import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';

const TasksColumn = ({ headName }) => {
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
    <>
      <ColumnHeadBar headName={headName} />
      <ColumnsTasksList tasks={tasks} />
    </>
  );
};
export default TasksColumn;
