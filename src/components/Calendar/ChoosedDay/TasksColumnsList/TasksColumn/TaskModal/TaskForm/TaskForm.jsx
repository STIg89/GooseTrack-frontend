import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  InputContaiter,
  InputTimeContaiter,
  Label,
  Input,
  RadioButtonsContainer,
  RadioButtonContainer,
  RadioInput,
  RadioLabel,
  ButtonContainer,
  AddButton,
  AddIcon,
  CancelButton,
  // EditButton,
  // EditIcon,
} from './TaskForm.styled';
import { format } from 'date-fns';

import Icons from 'images/sprite.svg';

import { useDateValidation } from 'helpers/useDateValidation';
import { addTask } from 'redux/tasks/operations';

export const TaskForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('low');
  const [priority, setPriority] = useState('low');
  const validDate = useDateValidation();
  const currentDay = format(validDate, 'yyyy-MM-dd');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
    setPriority(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;

    const startTime = start.split(':');
    const endTime = end.split(':');

    const startNumber = parseInt(startTime[0], 10);
    const endNumber = parseInt(endTime[0], 10);

    if (startNumber > endNumber) {
      console.log('Не вірний час');
      return;
    }

    if (title.trim() === '' || start.trim() === '' || end.trim() === '') {
      console.log('Пусто');
      return;
    }

    dispatch(
      addTask({
        title,
        start,
        end,
        priority,
        date: currentDay,
        category: 'to-do',
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContaiter>
        <Label>Title</Label>
        <Input type="text" placeholder="Enter text" name="title" />
      </InputContaiter>

      <InputTimeContaiter>
        <InputContaiter>
          <Label>Start</Label>
          <Input type="time" name="start" />
        </InputContaiter>

        <InputContaiter>
          <Label>End</Label>
          <Input type="time" name="end" />
        </InputContaiter>
      </InputTimeContaiter>

      <RadioButtonsContainer>
        <RadioButtonContainer>
          <RadioInput
            type="radio"
            name="option"
            value="low"
            checked={selectedOption === 'low'}
            onChange={handleOptionChange}
          />
          <RadioLabel>Low</RadioLabel>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioInput
            type="radio"
            name="option"
            value="medium"
            checked={selectedOption === 'medium'}
            onChange={handleOptionChange}
          />
          <RadioLabel>Medium</RadioLabel>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioInput
            type="radio"
            name="option"
            value="high"
            checked={selectedOption === 'high'}
            onChange={handleOptionChange}
          />
          <RadioLabel>High</RadioLabel>
        </RadioButtonContainer>
      </RadioButtonsContainer>

      <ButtonContainer>
        <AddButton type="submit">
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
    </Form>
  );
};

export default TaskForm;
