import TasksColumn from './TasksColumn/TasksColumn';

import { ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ readinessTasks }) => {
  return (
    <ColumnsList>
      <TasksColumn
        headName="To do"
        tasks={readinessTasks.todotasks}
        addCategory="to-do"
      />

      <TasksColumn
        headName="In progress"
        tasks={readinessTasks.inprogresstasks}
        addCategory="in-progress"
      />

      <TasksColumn
        headName="Done"
        tasks={readinessTasks.donetasks}
        addCategory="done"
      />
    </ColumnsList>
  );
};
export default TasksColumnsList;
