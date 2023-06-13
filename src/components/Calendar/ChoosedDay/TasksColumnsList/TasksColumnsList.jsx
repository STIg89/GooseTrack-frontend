import TasksColumn from './TasksColumn/TasksColumn';
import { useTranslation } from 'react-i18next';

import { ColumnsList } from './TasksColumnsList.Styled';
import { useState } from 'react';

const TasksColumnsList = ({ readinessTasks }) => {
  const { t } = useTranslation();
  const [boards, setBoards] = useState([
    {
      id: 1,
      headName: 'To do',
      tasks: readinessTasks.todotasks,
      addCategory: 'to-do',
    },
    {
      id: 2,
      headName: 'In progress',
      tasks: readinessTasks.inprogresstasks,
      addCategory: 'in-progress',
    },
    {
      id: 3,
      headName: 'Done',
      tasks: readinessTasks.donetasks,
      addCategory: 'done',
    },
  ]);
  return (
    <ColumnsList>
      {boards.map(board => (
        <TasksColumn
          headName={board.headName}
          tasks={board.tasks}
          addCategory={board.addCategory}
        />
      ))}
    </ColumnsList>
  );
};
export default TasksColumnsList;
