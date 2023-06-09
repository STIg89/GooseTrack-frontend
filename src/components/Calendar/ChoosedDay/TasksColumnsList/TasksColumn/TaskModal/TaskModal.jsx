import Modal from 'components/Modal/Modal';
import TaskForm from './TaskForm/TaskForm';

const TaskModal = ({
  onCloseModal,
  showEditBtn,
  id,
  editTask,
  addCategory,
}) => {
  return (
    <Modal onCloseModal={onCloseModal}>
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
