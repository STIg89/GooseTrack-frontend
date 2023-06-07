import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { TaskItem, TaskList } from './MonthTaskList.styled';
import { parseDate } from 'helpers/parseDate';
import { nanoid } from 'nanoid';

const MonthTaskList = ({ date }) => {
  const tasks = useSelector(selectTasks);
  const parsedDate = parseDate(date);
  const filteredTasks = tasks?.filter(
    item => parseDate(new Date(item.date.split('T')[0])) === parsedDate
  );
  return (
    <TaskList tasks={filteredTasks} key={nanoid()}>
      {filteredTasks.length > 0
        ? filteredTasks
            ?.sort((a, b) => parseInt(a.start) - parseInt(b.start))
            .map(item => (
              <TaskItem priority={item.priority} key={item._id}>
                {item.title}
              </TaskItem>
            ))
        : null}
    </TaskList>
  );
};

export default MonthTaskList;
