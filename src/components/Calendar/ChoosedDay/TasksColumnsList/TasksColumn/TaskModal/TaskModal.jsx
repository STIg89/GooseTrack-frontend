import {
  ModalForm,
  ButtonContainer,
  AddButton,
  CancelButton,
} from './TaskModal.styled';

import { TaskForm } from './TaskForm/TaskForm';

export const TaskModal = () => {
  return (
    <ModalForm>
      <TaskForm />

      <ButtonContainer>
        <AddButton type="button">Add</AddButton>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonContainer>

      {/* <button type="button">Edit</button> */}
    </ModalForm>
  );
};
