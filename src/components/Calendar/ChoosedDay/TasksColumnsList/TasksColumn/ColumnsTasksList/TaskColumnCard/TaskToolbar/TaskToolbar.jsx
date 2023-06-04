import Icons from 'images/sprite.svg';
import { BtnStyled, ToolBarItem, Wraper } from './TaskToolbar.Styled';
import { deleteTask, patchTask } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';

const TaskToolBar = ({ id }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const editTask = tasks.find(task => task._id === id);

  // console.log('editTask', editTask);
  // editTask.category = '123456';
  // console.log('editTask', editTask);

  const category = ['to-do', 'in-progress', 'done'];
  return (
    <Wraper>
      <div>
        <fieldset>
          {category.map(item => {
            if (item !== editTask.category) {
              return (
                <div key={item._id}>
                  <input
                    type="radio"
                    id={id}
                    name={id}
                    value={item}
                    onChange={event => {
                      console.log('меняем прогресс na', item);
                      console.log('editTask', editTask);
                      console.log('editTask.category:', editTask.category);

                      editTask.priority = 'low';
                      console.log('editTask new', editTask);
                      dispatch(patchTask(id, editTask));
                    }}
                  />
                  <label htmlFor={id}>{item}</label>
                </div>
              );
            }
            return null;
          })}
        </fieldset>
        {/* 
        <select class="ice-cream" name="ice-cream">
          <option value="">
            <ToolBarItem>
              <use href={`${Icons}#task-move-sf`}></use>
            </ToolBarItem>
          </option>
          {category.map(item => {
            if (item !== editTask.category) {
              return <option value={item}>{item}</option>;
            }
          })}
        </select> */}

        <BtnStyled
          type="button"
          onClick={() => {
            console.log('меняем прогресс');
            // dispatch(patchTask(id, editTask));
          }}
        >
          <ToolBarItem>
            <use href={`${Icons}#task-move-sf`}></use>
          </ToolBarItem>
        </BtnStyled>
      </div>

      <BtnStyled type="button" onClick={() => console.log('редактируем')}>
        <ToolBarItem>
          <use href={`${Icons}#task-edit-sf`}></use>
        </ToolBarItem>
      </BtnStyled>
      <BtnStyled
        type="button"
        onClick={() => {
          console.log('id to dellete:', id);
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
