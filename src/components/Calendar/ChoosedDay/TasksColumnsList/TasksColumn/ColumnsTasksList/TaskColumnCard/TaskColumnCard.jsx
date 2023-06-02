import { AvatarWraper, ToolBarWraper } from './TaskColumnCard.Styled';
import TaskToolBar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        necessitatibus.
      </p>
      <ToolBarWraper>
        <AvatarWraper>
          <img alt="avatar" width={32} height={32}></img>
          <p>Low</p>
        </AvatarWraper>

        <TaskToolBar />
      </ToolBarWraper>
    </>
  );
};
export default TaskColumnCard;
