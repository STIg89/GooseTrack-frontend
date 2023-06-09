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
  return (
    <Modal onCloseModal={onCloseModal} isOpened={isOpened}>
      <TaskForm
        onCloseModal={onCloseModal}
        showEditBtn={showEditBtn}
        id={id}
        editTask={editTask}
        addCategory={addCategory}
      />
    </Modal>
  );
};

export default TaskModal;
