import Icons from 'images/sprite.svg';
import { BtnStyled, ToolBarItem, Wraper } from './TaskToolbar.Styled';
import { deleteTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';

const TaskToolBar = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Wraper>
      <BtnStyled type="button" onClick={() => console.log('меняем прогресс')}>
        <ToolBarItem>
          <use href={`${Icons}#task-move-sf`}></use>
        </ToolBarItem>
      </BtnStyled>
      <BtnStyled type="button" onClick={() => console.log('редактируем')}>
        <ToolBarItem>
          <use href={`${Icons}#task-edit-sf`}></use>
        </ToolBarItem>
      </BtnStyled>
      <BtnStyled
        type="button"
        onClick={() => {
          console.log('id:', id);
          dispatch(deleteTask(id));
        }}
      >
        <ToolBarItem>
          <use href={`${Icons}#task-trash-sf`}></use>
        </ToolBarItem>
      </BtnStyled>
    </Wraper>
  );
};
export default TaskToolBar;
