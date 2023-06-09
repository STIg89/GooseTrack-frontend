import { useEffect, useState } from 'react';
import { TaskslistWraper } from './ColumnsTasksList.Styled';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks, addCategory }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <TaskslistWraper
      style={
        tasks.length === 0
          ? { height: '25px' }
          : { maxHeight: `${windowHeight - 500}px` }
      }
    >
      {tasks.map(item => {
        return (
          <TaskColumnCard
            taskText={item.title}
            priority={item.priority}
            id={item._id}
            key={item._id}
            addCategory={addCategory}
          />
        );
      })}
    </TaskslistWraper>
  );
};
export default ColumnsTasksList;
