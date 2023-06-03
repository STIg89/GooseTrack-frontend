import AddTaskBtn from './TasksColumn/AddTaskBtn/AddTaskBtn';
import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsItem, ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ tasks }) => {
  return (
    <ColumnsList>
      <ColumnsItem>
        <TasksColumn headName="To do" tasks={tasks} />
        <AddTaskBtn />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="In progress" tasks={tasks} />
        <AddTaskBtn />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="Done" tasks={tasks} />
        <AddTaskBtn />
      </ColumnsItem>
    </ColumnsList>
  );
};
export default TasksColumnsList;
