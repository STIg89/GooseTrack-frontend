import AddTaskBtn from './TasksColumn/AddTaskBtn/AddTaskBtn';
import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsItem, ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ tasks }) => {
  const todotasks = tasks.filter(item => item.status === 'To do');
  const inprogresstasks = tasks.filter(item => item.status === 'In progress');
  const donetasks = tasks.filter(item => item.status === 'Done');

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
