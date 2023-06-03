import {
  Avatar,
  CardWraper,
  PriorityWraper,
  TaskText,
  ToolsWraper,
  Wraper,
} from './TaskColumnCard.Styled';
import TaskToolBar from './TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ taskText, priority }) => {
  return (
    <CardWraper>
      <TaskText>{taskText}</TaskText>
      <Wraper>
        <ToolsWraper>
          <Avatar alt="avatar"></Avatar>
          <PriorityWraper text={priority}>{priority}</PriorityWraper>
        </ToolsWraper>

        <TaskToolBar />
      </Wraper>
    </CardWraper>
  );
};
export default TaskColumnCard;
