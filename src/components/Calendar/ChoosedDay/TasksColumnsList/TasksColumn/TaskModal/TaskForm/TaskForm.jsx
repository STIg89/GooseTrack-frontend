import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  EditButton,
  EditIcon,
} from './TaskForm.styled';
import { format } from 'date-fns';

import Icons from 'images/sprite.svg';

import { useDateValidation } from 'helpers/useDateValidation';
import { addTask, patchTask } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';

const TaskForm = ({ onCloseModal, showEditBtn, id, category }) => {
  const dispatch = useDispatch();
  // const [titleValue, setTitleValue] = useState('');
  // const [startValue, setStartValue] = useState('');
  // const [endValue, setEndValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('low');
  const [priority, setPriority] = useState('low');

  const validDate = useDateValidation();
  const currentDay = format(validDate, 'yyyy-MM-dd');

  const tasks = useSelector(selectTasks);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
    setPriority(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;

    // setTitleValue(title);
    // setStartValue(start);
    // setEndValue(end);

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

    const editTask = {
      title,
      start,
      end,
      priority,
      date: currentDay,
      category,
    };

    if (tasks.find(task => task._id === id)) {
      dispatch(patchTask({ id, task: editTask }));
    } else {
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
    }

    onCloseModal();
  };

  // const handleChange = e => {
  // const { name, value } = e.target;
  // setTitleValue(prevState => ({
  //   ...prevState,
  //   [name]: value,
  // }));
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContaiter>
        <Label>Title</Label>
        <Input
          type="text"
          placeholder="Enter text"
          name="title"
          // onChange={handleChange}
          // value={titleValue}
        />
      </InputContaiter>

      <InputTimeContaiter>
        <InputContaiter>
          <Label>Start</Label>
          <Input
            type="time"
            name="start"
            // onChange={handleChange}
            // value={startValue}
          />
        </InputContaiter>

        <InputContaiter>
          <Label>End</Label>
          <Input
            type="time"
            name="end"
            // onChange={handleChange}
            // value={endValue}
          />
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
        {showEditBtn ? (
          <EditButton type="submit">
            <EditIcon>
              <use href={`${Icons}#edit-btn-s`}></use>
            </EditIcon>
            Edit
          </EditButton>
        ) : (
          <>
            <AddButton type="submit">
              <AddIcon>
                <use href={`${Icons}#add-btn-s`}></use>
              </AddIcon>
              Add
            </AddButton>
            <CancelButton type="button" onClick={() => onCloseModal()}>
              Cancel
            </CancelButton>
          </>
        )}
      </ButtonContainer>
    </Form>
  );
};

export default TaskForm;
