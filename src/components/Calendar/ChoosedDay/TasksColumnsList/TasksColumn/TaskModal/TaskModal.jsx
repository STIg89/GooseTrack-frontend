import Modal from 'components/Modal/Modal';
import TaskForm from './TaskForm/TaskForm';

const TaskModal = ({ onCloseModal, showEditBtn, id, category }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <TaskForm
        onCloseModal={onCloseModal}
        showEditBtn={showEditBtn}
        id={id}
        category={category}
      />
    </Modal>
  );
};

export default TaskModal;
