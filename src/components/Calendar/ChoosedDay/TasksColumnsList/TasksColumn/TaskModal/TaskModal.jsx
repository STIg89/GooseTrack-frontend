import Modal from 'components/Modal/Modal';
import TaskForm from './TaskForm/TaskForm';

export const TaskModal = ({ onCloseModal }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <TaskForm onCloseModal={onCloseModal} />
    </Modal>
  );
};

export default TaskModal;
