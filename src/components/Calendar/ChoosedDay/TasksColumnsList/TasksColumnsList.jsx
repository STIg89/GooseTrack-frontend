import TasksColumn from './TasksColumn/TasksColumn';
import { useTranslation } from 'react-i18next';

import { ColumnsList } from './TasksColumnsList.Styled';

const TasksColumnsList = ({ readinessTasks }) => {
  const { t } = useTranslation();

  return (
    <ColumnsList>
      <TasksColumn
        headName={t('To do')}
        tasks={readinessTasks.todotasks}
        addCategory="to-do"
      />

      <TasksColumn
        headName={t('In progress')}
        tasks={readinessTasks.inprogresstasks}
        addCategory="in-progress"
      />

      <TasksColumn
        headName={t('Done')}
        tasks={readinessTasks.donetasks}
        addCategory="done"
      />
    </ColumnsList>
  );
};
export default TasksColumnsList;
