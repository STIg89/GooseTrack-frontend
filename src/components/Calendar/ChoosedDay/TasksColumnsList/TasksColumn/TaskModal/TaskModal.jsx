import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import TaskForm from './TaskForm/TaskForm';

const TaskModal = ({
  onCloseModal,
  showEditBtn,
  id,
  editTask,
  addCategory,
  isOpened,
}) => {
  const [animationModal, setAnimationModal] = useState(isOpened);

  return (
    <Modal
      onCloseModal={onCloseModal}
      isOpened={isOpened}
      animationModalOnSubmit={animationModal}
    >
      <TaskForm
        onCloseModal={onCloseModal}
        showEditBtn={showEditBtn}
        id={id}
        editTask={editTask}
        addCategory={addCategory}
        setAnimationModal={setAnimationModal}
      />
    </Modal>
  );
};

export default TaskModal;
