import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.Styled';

const TasksColumn = ({
  headName,
  tasks,
  addCategory,
  onDrop,
  onDragOver,
  key,
  item,
  onDragStart,
}) => {
  const handleDrop = event => {
    // console.log('handleDrop in Task Column,event:', event);
    event.preventDefault();
    const data = event.dataTransfer.getData('task/moving');
    // console.log('handleDrop in Task Column,data:', JSON.stringify(data));
    console.log('handleDrop in Task Column,data.id:', data.id);
    console.log('handleDrop in Task Column,key:', key);

    onDrop(data);
  };

  const handleDragOver = event => {
    // console.log('handleDragOver in Task Column,event:', event);

    event.preventDefault();
    onDragOver();
  };
  return (
    <ColumnsItem onDrop={handleDrop} onDragOver={handleDragOver}>
      <ColumnHeadBar headName={headName} addCategory={addCategory} />
      {tasks && (
        <ColumnsTasksList
          tasks={tasks}
          // key={key}
          // item={item}
          onDragStart={onDragStart}
        />
      )}
      <AddTaskBtn addCategory={addCategory} />
    </ColumnsItem>
  );
};
export default TasksColumn;
