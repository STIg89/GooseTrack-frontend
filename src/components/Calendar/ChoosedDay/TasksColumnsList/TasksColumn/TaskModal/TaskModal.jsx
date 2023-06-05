import {
  ModalForm,
  ButtonContainer,
  AddButton,
  AddIcon,
  CancelButton,
  CloseIcon,
  EditButton,
  EditIcon,
} from './TaskModal.styled';
import Icons from 'images/sprite.svg';

import TaskForm from './TaskForm/TaskForm';

export const TaskModal = () => {
  return (
    <ModalForm>
      <CloseIcon>
        <use href={`${Icons}#icon-close`}></use>
      </CloseIcon>

      <TaskForm />

      <ButtonContainer>
        <AddButton type="button">
          <AddIcon>
            <use href={`${Icons}#add-btn-s`}></use>
          </AddIcon>
          Add
        </AddButton>
        <CancelButton type="button">Cancel</CancelButton>

        {/* <EditButton type="button">
          <EditIcon>
            <use href={`${Icons}#edit-btn-s`}></use>
          </EditIcon>
          Edit
        </EditButton> */}
      </ButtonContainer>
    </ModalForm>
  );
};

export default TaskModal;
