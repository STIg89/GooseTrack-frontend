import AddTaskBtn from './TasksColumn/AddTaskBtn/AddTaskBtn';
import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsItem, ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ tasks }) => {
  const todotasks = tasks.filter(item => item.category === 'to-do');
  const inprogresstasks = tasks.filter(item => item.category === 'in-progress');
  const donetasks = tasks.filter(item => item.category === 'done');

  return (
    <ColumnsList>
      <ColumnsItem>
        <TasksColumn headName="To do" tasks={todotasks} />
        <AddTaskBtn />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="In progress" tasks={inprogresstasks} />
        <AddTaskBtn />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="Done" tasks={donetasks} />
        <AddTaskBtn />
      </ColumnsItem>
    </ColumnsList>
  );
};
export default TasksColumnsList;
