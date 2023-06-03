import AddTaskBtn from './TasksColumn/AddTaskBtn/AddTaskBtn';
import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsItem, ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = () => {
  return (
    <ColumnsList>
      <ColumnsItem>
        <TasksColumn headName="To do" />
        <AddTaskBtn />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="In progress" />
        <AddTaskBtn />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="Done" />
        <AddTaskBtn />
      </ColumnsItem>
    </ColumnsList>
  );
};
export default TasksColumnsList;
