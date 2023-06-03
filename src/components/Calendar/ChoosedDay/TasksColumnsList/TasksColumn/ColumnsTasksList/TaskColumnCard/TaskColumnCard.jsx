import { AvatarWraper, ToolBarWraper } from './TaskColumnCard.Styled';
import TaskToolBar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ taskText, priority }) => {
  return (
    <>
      <p>{taskText}</p>
      <ToolBarWraper>
        <AvatarWraper>
          <img alt="avatar" width={32} height={32}></img>
          <p>{priority}</p>
        </AvatarWraper>

        <TaskToolBar />
      </ToolBarWraper>
    </>
  );
};
export default TaskColumnCard;
