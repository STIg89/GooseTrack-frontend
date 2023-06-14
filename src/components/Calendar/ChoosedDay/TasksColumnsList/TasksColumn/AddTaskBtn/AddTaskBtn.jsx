import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TaskModal from '../TaskModal/TaskModal';

import { TaskBtn, TaskBtnsvg } from './AddTaskBtn.Styled';

import Icons from 'images/sprite.svg';

const AddTaskBtn = ({ addCategory }) => {
  const { i18n } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <TaskBtn type="button" onClick={handleToggleModal}>
        <TaskBtnsvg>
          <use href={`${Icons}#add-btn-s`}></use>
        </TaskBtnsvg>
        {i18n.language === 'en' ? 'Add task' : 'Додати завдання'}
      </TaskBtn>
      {isOpened && (
        <TaskModal
          onCloseModal={handleToggleModal}
          addCategory={addCategory}
          isOpened={isOpened}
        />
      )}
    </>
  );
};

export default AddTaskBtn;
