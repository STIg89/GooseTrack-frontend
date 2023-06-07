import Icons from 'images/sprite.svg';
import {
  BtnArrow,
  BtnStyled,
  ChouseCat,
  InputStyled,
  LabelStyled,
  ToolBarItem,
  Wraper,
} from './TaskToolbar.Styled';
import { deleteTask, patchTask } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { useState } from 'react';

const TaskToolBar = ({ id }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  let editTask = tasks.find(task => task._id === id);

  const category = ['to-do', 'in-progress', 'done'];

  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleClick = () => {
    setIsClicked(true);
  };

  async function handleOptionChange(event) {
    await setSelectedOption(event.target.value);
    editTask = { ...editTask, category: event.target.value };

    dispatch(patchTask({ id: id, task: { category: editTask.category } }));
    setIsClicked(false);
  }

  return (
    <Wraper>
      <BtnArrow>
        <BtnStyled
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          <ToolBarItem>
            <use href={`${Icons}#task-move-sf`}></use>
          </ToolBarItem>
        </BtnStyled>
        <ChouseCat
          style={isClicked ? { display: 'flex' } : { display: 'none' }}
        >
          {category.map(item => {
            return (
              item !== editTask.category && (
                <div key={Math.random()}>
                  <LabelStyled>
                    {item}
                    <ToolBarItem>
                      <use href={`${Icons}#task-move-sf`}></use>
                    </ToolBarItem>
                    <InputStyled
                      type="radio"
                      value={item}
                      checked={selectedOption === { item }}
                      onChange={handleOptionChange}
                    />
                  </LabelStyled>
                </div>
              )
            );
          })}
        </ChouseCat>
      </BtnArrow>

      <BtnStyled type="button" onClick={() => console.log('редактируем')}>
        <ToolBarItem>
          <use href={`${Icons}#task-edit-sf`}></use>
        </ToolBarItem>
      </BtnStyled>
      <BtnStyled
        type="button"
        onClick={() => {
          dispatch(deleteTask(id));
          console.log('del task with id', id);
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
