import { useDispatch } from 'react-redux';
import {
  ButtonContainer,
  AddButton,
  AddIcon,
  CancelButton,
  // EditButton,
  // EditIcon,
} from './TaskModal.styled';
import Icons from 'images/sprite.svg';

import Modal from 'components/Modal/Modal';
import TaskForm from './TaskForm/TaskForm';

// import { selectTasks } from 'redux/tasks/selectors';
import { addTask } from 'redux/tasks/operations';

export const TaskModal = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);

  const addTaskSubmit = () => {
    dispatch(addTask({}));

    // console.log(addTask());
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <TaskForm />

      <ButtonContainer>
        <AddButton type="button" onClick={addTaskSubmit}>
          <AddIcon>
            <use href={`${Icons}#add-btn-s`}></use>
          </AddIcon>
          Add
        </AddButton>
        <CancelButton type="button" onClick={() => onCloseModal()}>
          Cancel
        </CancelButton>

        {/* <EditButton type="button">
          <EditIcon>
            <use href={`${Icons}#edit-btn-s`}></use>
          </EditIcon>
          Edit
        </EditButton> */}
      </ButtonContainer>
    </Modal>
  );
};

export default TaskModal;
