import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ readinessTasks }) => {
  return (
    <ColumnsList>
      <TasksColumn headName="To do" tasks={readinessTasks.todotasks} />

      <TasksColumn
        headName="In progress"
        tasks={readinessTasks.inprogresstasks}
      />

      <TasksColumn headName="Done" tasks={readinessTasks.donetasks} />
    </ColumnsList>
  );
};
export default TasksColumnsList;
