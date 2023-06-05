import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsItem, ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ readinessTasks }) => {
  return (
    <ColumnsList>
      <ColumnsItem>
        <TasksColumn headName="To do" tasks={readinessTasks.todotasks} />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn
          headName="In progress"
          tasks={readinessTasks.inprogresstasks}
        />
      </ColumnsItem>

      <ColumnsItem>
        <TasksColumn headName="Done" tasks={readinessTasks.donetasks} />
      </ColumnsItem>
    </ColumnsList>
  );
};
export default TasksColumnsList;
