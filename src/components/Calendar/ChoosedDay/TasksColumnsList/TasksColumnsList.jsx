import TasksColumn from './TasksColumn/TasksColumn';
import { useTranslation } from 'react-i18next';

import { ColumnsList } from './TasksColumnsList.Styled';
import { useState } from 'react';

const TasksColumnsList = ({ readinessTasks }) => {
  const { i18n } = useTranslation();
  const [boards, setBoards] = useState([
    {
      id: 1,
      headName: i18n.language === 'en' ? 'To do' : 'Потрібно зробити',
      tasks: readinessTasks.todotasks,
      addCategory: 'to-do',
    },
    {
      id: 2,
      headName: i18n.language === 'en' ? 'In progress' : 'В процесі',
      tasks: readinessTasks.inprogresstasks,
      addCategory: 'in-progress',
    },
    {
      id: 3,
      headName: i18n.language === 'en' ? 'Done' : 'Зроблено',
      tasks: readinessTasks.donetasks,
      addCategory: 'done',
    },
  ]);
  const handleDragStart = (event, item) => {
    // console.log('handleDragStart in taskscolumnList,event:', event);
    console.log('handleDragStart in taskscolumnList,item:', item);

    event.dataTransfer.setData('task/moving', JSON.stringify(item));
  };

  const handleDrop = data => {
    // const newItems = boards.filter(item => item.id !== data.id);

    // console.log('handleDrop in taskscolumnList boards:', boards);
    console.log('handleDrop in taskscolumnList data:', data);
    // console.log('handleDrop in taskscolumnList newItems:', newItems);

    // console.log('handleDrop in taskscolumnList newItems:', newItems);

    // setBoards(newItems);
  };

  const handleDragOver = event => {
    // console.log('handleDragOver in taskscolumnList ,event:', event);
    // event.preventDefault();
  };
  return (
    <ColumnsList>
      {boards.map(board => (
        <TasksColumn
          headName={board.headName}
          tasks={board.tasks}
          addCategory={board.addCategory}
          key={board.id}
          item={board}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />
      ))}
      {/* <TasksColumn
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
      /> */}
    </ColumnsList>
  );
};
export default TasksColumnsList;
