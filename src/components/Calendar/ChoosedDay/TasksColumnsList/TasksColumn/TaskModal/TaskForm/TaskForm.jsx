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
import { Notify } from 'notiflix';

import Icons from 'images/sprite.svg';

import { useDateValidation } from 'helpers/useDateValidation';
import { addTask, patchTask } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';

const TaskForm = ({ onCloseModal, showEditBtn, id, editTask, addCategory }) => {
  const [title, setTitle] = useState(editTask?.title || '');
  const [start, setStart] = useState(editTask?.start || '');
  const [end, setEnd] = useState(editTask?.end || '');
  const [selectedOption, setSelectedOption] = useState('low');
  const [priority, setPriority] = useState('low');
  const category = editTask?.category || 'to-do';
  const dispatch = useDispatch();

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

    const startTime = start.split(':');
    const endTime = end.split(':');

    const startHour = parseInt(startTime[0], 10);
    const endHour = parseInt(endTime[0], 10);
    const startMinute = parseInt(startTime[1], 10);
    const endMinute = parseInt(endTime[1], 10);

    if (
      startHour > endHour ||
      (startHour === endHour && startMinute >= endMinute)
    ) {
      Notify.warning(
        'Invalid time format. The start cannot be less than the end.'
      );

      return;
    }

    if (title.trim() === '' || start.trim() === '' || end.trim() === '') {
      Notify.warning('All fields must be filled.');
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
      Notify.success('Successfully! The task has been changed.');
    } else {
      dispatch(
        addTask({
          title,
          start,
          end,
          priority,
          date: currentDay,
          category: addCategory,
        })
      );
      Notify.success('Successfully! Task added.');
    }

    onCloseModal();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        return setTitle(value);
      case 'start':
        return setStart(value);
      case 'end':
        return setEnd(value);

      default:
        return value;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContaiter>
        <Label>Title</Label>
        <Input
          type="text"
          placeholder="Enter text"
          name="title"
          onChange={handleChange}
          value={title}
        />
      </InputContaiter>

      <InputTimeContaiter>
        <InputContaiter>
          <Label>Start</Label>
          <Input
            type="time"
            name="start"
            onChange={handleChange}
            value={start}
            id="timeInput"
          />
        </InputContaiter>

        <InputContaiter>
          <Label>End</Label>
          <Input
            type="time"
            name="end"
            onChange={handleChange}
            value={end}
            id="timeInput"
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
