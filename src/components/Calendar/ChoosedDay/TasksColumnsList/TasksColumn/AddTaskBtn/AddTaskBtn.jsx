import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TaskModal from '../TaskModal/TaskModal';

import { TaskBtn, TaskBtnsvg } from './AddTaskBtn.Styled';

import Icons from 'images/sprite.svg';

const AddTaskBtn = ({ addCategory }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => setIsOpened(!isOpened);

  const { t } = useTranslation();

  return (
    <>
      <TaskBtn type="button" onClick={handleToggleModal}>
        <TaskBtnsvg>
          <use href={`${Icons}#add-btn-s`}></use>
        </TaskBtnsvg>
        {t('Add task')}
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
