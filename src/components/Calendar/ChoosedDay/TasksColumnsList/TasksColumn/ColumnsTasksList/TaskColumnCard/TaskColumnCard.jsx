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
import Cookies from 'js-cookie';

const TaskColumnCard = ({ taskText, priority, id, addCategory }) => {
  const user = useSelector(selectUser);

  const [isCut, setIsCut] = useState(true);
  const toggleCut = () => {
    setIsCut(!isCut);
  };
  const currentLanguageCode = Cookies.get('i18next');
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
            <NoAvatar>{user.name?.charAt(0).toUpperCase()}</NoAvatar>
          )}
          {currentLanguageCode === 'ua' && (
            <PriorityWraper text={priority}>
              {priority === 'low' && 'Низька'}
              {priority === 'medium' && 'Середня'}
              {priority === 'high' && 'Висока'}
            </PriorityWraper>
          )}
          {currentLanguageCode === 'en' && (
            <PriorityWraper text={priority}>{priority}</PriorityWraper>
          )}
        </ToolsWraper>
        <TaskToolBar id={id} addCategory={addCategory} />
      </Wraper>
    </CardWraper>
  );
};
export default TaskColumnCard;
