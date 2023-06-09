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
import TaskModal from '../../../TaskModal/TaskModal';

import { deleteTask, fetchDayTasks, patchTask } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskToolBar = ({ id, addCategory }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  let editTask = tasks.find(task => task._id === id);

  const category = ['to-do', 'in-progress', 'done'];

  const [showEditBtn, setShowEditBtn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    editTask = { ...editTask, category: event.target.value };

    dispatch(patchTask({ id: id, task: { category: editTask.category } }));
  }
  let { currentDay } = useParams();

  const onDeleteHendler = () => {
    dispatch(deleteTask(id));

    const date = new Date(currentDay);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const reqObj = {
      month,
      day,
      year,
      page: 1,
      limit: 100,
    };

    dispatch(fetchDayTasks(reqObj));
  };

  const chouseCatRef = useRef(null);
  useEffect(() => {
    const handleChouseCatClickOutside = e => {
      if (chouseCatRef.current && !chouseCatRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('mousedown', handleChouseCatClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleChouseCatClickOutside);
    };
  }, []);

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
          ref={chouseCatRef}
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

      <BtnStyled
        type="button"
        onClick={() => {
          handleToggleModal();
          setShowEditBtn(true);
        }}
      >
        <ToolBarItem>
          <use href={`${Icons}#task-edit-sf`}></use>
        </ToolBarItem>
      </BtnStyled>

      <BtnStyled type="button" onClick={() => onDeleteHendler(id)}>
        <ToolBarItem>
          <use href={`${Icons}#task-trash-sf`}></use>
        </ToolBarItem>
      </BtnStyled>

      {isOpened && (
        <TaskModal
          onCloseModal={handleToggleModal}
          showEditBtn={showEditBtn}
          id={id}
          editTask={editTask}
          addCategory={addCategory}
          isOpened={isOpened}
        />
      )}
    </Wraper>
  );
};
export default TaskToolBar;
