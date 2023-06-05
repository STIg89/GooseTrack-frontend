import { useState } from 'react';

import TaskModal from '../TaskModal/TaskModal';

import { TaskBtn, TaskBtnsvg } from './AddTaskBtn.Styled';

import Icons from 'images/sprite.svg';

const AddTaskBtn = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <>
      <TaskBtn type="button" onClick={handleToggleModal}>
        <TaskBtnsvg>
          <use href={`${Icons}#add-btn-s`}></use>
        </TaskBtnsvg>
        Add task
      </TaskBtn>
      {isOpened && <TaskModal onCloseModal={handleToggleModal} />}
    </>
  );
};
export default AddTaskBtn;
