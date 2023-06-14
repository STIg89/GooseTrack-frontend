import TasksColumn from './TasksColumn/TasksColumn';
import { useTranslation } from 'react-i18next';

import { ColumnsList } from './TasksColumnsList.Styled';
import { useState } from 'react';

const TasksColumnsList = ({ readinessTasks }) => {
  const { i18n } = useTranslation();
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
  const handleDragStart = (event, item) => {
    console.log('handleDragStart in taskscolumnList,event:', event);
    event.dataTransfer.setData('text/plain', item);
  };

  const handleDrop = data => {
    const newItems = boards.filter(item => item !== data);
    console.log('handleDrop in taskscolumnList boards:', boards);
    console.log('handleDrop in taskscolumnList data:', data);

    console.log('handleDrop in taskscolumnList newItems:', newItems);

    setBoards(newItems);
  };

  const handleDragOver = event => {
    console.log('handleDragOver in taskscolumnList ,event:', event);

    event.preventDefault();
  };
  return (
    <ColumnsList>
      <TasksColumn
        headName={i18n.language === 'en' ? 'To do' : 'Потрібно зробити'}
        tasks={readinessTasks.todotasks}
        addCategory="to-do"
      />

      <TasksColumn
        headName={i18n.language === 'en' ? 'In progress' : 'В процесі'}
        tasks={readinessTasks.inprogresstasks}
        addCategory="in-progress"
      />

      <TasksColumn
        headName={i18n.language === 'en' ? 'Done' : 'Зроблено'}
        tasks={readinessTasks.donetasks}
        addCategory="done"
      />
    </ColumnsList>
  );
};
export default TasksColumnsList;
