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
import Icons from 'images/sprite.svg';

import { addTask } from 'redux/tasks/operations';

export const TaskForm = ({ onCloseModal }) => {
  const [selectedOption, setSelectedOption] = useState('low');
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [priority, setPriority] = useState('low');
  const dispatch = useDispatch();

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
    setPriority(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formatDate = `${year}-${month}-${day}`;

    if (title.trim() === '' || start.trim() === '' || end.trim() === '') {
      console.log('Пусто');
      return;
    }

    setTitle(title);
    setStart(start);
    setEnd(end);

    dispatch(
      addTask({
        title,
        start,
        end,
        priority,
        date: formatDate,
        category: 'to-do',
      })
    );
  };

  // console.log('title =', title);
  // console.log('start =', start);
  // console.log('end =', end);
  // console.log('priority =', priority);

  return (
    <Form onSubmit={handleSubmit}>
      <InputContaiter>
        <Label>Title</Label>
        <Input type="text" placeholder="Enter text" name="title" />
      </InputContaiter>

      <InputTimeContaiter>
        <InputContaiter>
          <Label>Start</Label>
          <Input type="time" name="end" />
        </InputContaiter>

        <InputContaiter>
          <Label>End</Label>
          <Input type="time" name="start" />
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
