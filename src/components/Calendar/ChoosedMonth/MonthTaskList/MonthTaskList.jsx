import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { TaskItem, TaskList } from './MonthTaskList.styled';
import { parseDate } from 'helpers/parseDate';

const MonthTaskList = ({ date }) => {
  const tasks = useSelector(selectTasks);
  const parsedDate = parseDate(date);
  const filteredTasks = tasks?.filter(
    item => parseDate(new Date(item.date.split('T')[0])) === parsedDate
  );
  return (
    <TaskList>
      {filteredTasks.length > 0
        ? filteredTasks
            ?.sort((a, b) => parseInt(a.start) - parseInt(b.start))
            .map(item => (
              <TaskItem priority={item.priority} key={item.id}>
                {window.innerWidth < 768
                  ? `${item.title.substring(0, 3)}...`
                  : window.innerWidth > 1100
                  ? item.title
                  : `${item.title.substring(0, 20)}...`}
              </TaskItem>
            ))
        : null}
    </TaskList>
  );
};

export default MonthTaskList;
