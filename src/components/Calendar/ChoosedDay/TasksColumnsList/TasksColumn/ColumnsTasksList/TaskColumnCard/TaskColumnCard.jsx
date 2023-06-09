import { useState } from 'react';
import {
  Avatar,
  CardWraper,
  NoAvatar,
  PriorityWraper,
  TaskText,
  ToolsWraper,
  Wraper,
} from './TaskColumnCard.Styled';
import TaskToolBar from './TaskToolbar/TaskToolbar';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const TaskColumnCard = ({ taskText, priority, id, addCategory }) => {
  const user = useSelector(selectUser);

  const [isCut, setIsCut] = useState(true);
  const toggleCut = () => {
    setIsCut(!isCut);
  };
  let styleObj = isCut
    ? { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }
    : { textOverflow: 'clip', whiteSpace: 'normal', overflow: 'visible' };
  return (
    <CardWraper>
      <TaskText
        onMouseEnter={toggleCut}
        onMouseLeave={toggleCut}
        style={styleObj}
      >
        {taskText}
      </TaskText>
      <Wraper>
        <ToolsWraper>
          {user.avatarURL ? (
            <Avatar src={user.avatarURL} alt="user avatar" />
          ) : (
            <NoAvatar>{user.name?.charAt(0)}</NoAvatar>
          )}

          <PriorityWraper text={priority}>{priority}</PriorityWraper>
        </ToolsWraper>
        <TaskToolBar id={id} addCategory={addCategory} />
      </Wraper>
    </CardWraper>
  );
};
export default TaskColumnCard;
