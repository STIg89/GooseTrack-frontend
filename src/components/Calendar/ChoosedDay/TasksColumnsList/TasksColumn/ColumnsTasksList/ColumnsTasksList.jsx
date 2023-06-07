import { useEffect, useState } from 'react';
import { TaskslistWraper } from './ColumnsTasksList.Styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    let updateMaxHeight = () => {
      let viewportWidth = window.innerWidth;
      let viewportHeight = 0;
      if (viewportWidth <= 375) {
        viewportHeight = window.innerHeight - 314;
      } else {
        if (viewportWidth > 375 && viewportWidth <= 768) {
          viewportHeight = window.innerHeight - 274;
        } else {
          viewportHeight = window.innerHeight - 282;
        }

        setMaxHeight(viewportHeight);
      }
    };

    window.addEventListener('resize', updateMaxHeight);
    updateMaxHeight();

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

  return (
    <TaskslistWraper style={{ height: `${maxHeight}px` }}>
      {tasks.map(item => {
        return (
          <TaskColumnCard
            taskText={item.title}
            priority={item.priority}
            id={item._id}
            key={item._id}
          />
        );
      })}
    </TaskslistWraper>
  );
};
export default ColumnsTasksList;
