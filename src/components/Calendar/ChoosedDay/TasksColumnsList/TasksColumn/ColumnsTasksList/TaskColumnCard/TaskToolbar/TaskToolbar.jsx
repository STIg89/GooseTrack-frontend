import Icons from '../../../../../../../../images/sprite.svg';
import { ToolBarItem, Wraper } from './TaskToolbar.Styled';

const TaskToolBar = () => {
  return (
    <Wraper>
      <ToolBarItem>
        <use href={`${Icons}#task-move-sf`}></use>
      </ToolBarItem>
      <ToolBarItem>
        <use href={`${Icons}#task-edit-sf`}></use>
      </ToolBarItem>
      <ToolBarItem>
        <use href={`${Icons}#task-trash-sf`}></use>
      </ToolBarItem>
    </Wraper>
  );
};
export default TaskToolBar;
