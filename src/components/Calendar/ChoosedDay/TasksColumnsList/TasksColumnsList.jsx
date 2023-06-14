import TasksColumn from './TasksColumn/TasksColumn';
import { useTranslation } from 'react-i18next';

import { ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ readinessTasks }) => {
  const { i18n } = useTranslation();

  return (
    <ColumnsList>
      <TasksColumn
        headName={i18n.language === 'en' ? 'To do' : 'Зробити'}
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
