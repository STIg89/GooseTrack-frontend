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
import { useTranslation } from 'react-i18next';

import Icons from 'images/sprite.svg';

import { useDateValidation } from 'helpers/useDateValidation';
import { addTask, patchTask } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';

const TaskForm = ({
  onCloseModal,
  showEditBtn,
  id,
  editTask,
  addCategory,
  setAnimationModal,
}) => {
  const [title, setTitle] = useState(editTask?.title || '');
  const [start, setStart] = useState(editTask?.start || '09:00');
  const [end, setEnd] = useState(editTask?.end || '09:30');
  const [selectedOption, setSelectedOption] = useState(editTask?.priority);
  const [priority, setPriority] = useState(editTask?.priority || 'low');
  const category = editTask?.category || 'to-do';
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const { i18n } = useTranslation();

  const validDate = useDateValidation();
  const currentDay = format(validDate, 'yyyy-MM-dd');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
    setPriority(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const edit = {
      title,
      start,
      end,
      priority,
      date: currentDay,
      category,
    };
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

    if (
      title === editTask?.title &&
      end === editTask?.end &&
      start === editTask?.start &&
      priority === editTask?.priority
    ) {
      Notify.warning('Change at least one field.');
      return;
    }

    if (tasks.find(task => task._id === id)) {
      dispatch(patchTask({ id, task: edit }));
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

    closeModal();
  };

  const closeModal = () => {
    setAnimationModal(false);

    setTimeout(() => {
      onCloseModal();
    }, 300);
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
        <Label>{i18n.language === 'en' ? 'Title' : 'Заголовок'}</Label>
        <Input
          maxLength={250}
          type="text"
          placeholder={i18n.language === 'en' ? 'Enter text' : 'Введіть текст'}
          name="title"
          onChange={handleChange}
          value={title}
        />
      </InputContaiter>

      <InputTimeContaiter>
        <InputContaiter>
          <Label>{i18n.language === 'en' ? 'Start' : 'Початок'}</Label>
          <Input
            type="time"
            name="start"
            onChange={handleChange}
            value={start}
            id="timeInput"
          />
        </InputContaiter>

        <InputContaiter>
          <Label>{i18n.language === 'en' ? 'End' : 'Кінець'}</Label>
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
          <RadioLabel>
            <RadioInput
              type="radio"
              name="option"
              value="low"
              checked={selectedOption === 'low'}
              onChange={handleOptionChange}
            />
            {i18n.language === 'en' ? 'Low' : 'Легка'}
          </RadioLabel>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="option"
              value="medium"
              checked={selectedOption === 'medium'}
              onChange={handleOptionChange}
            />
            {i18n.language === 'en' ? 'Medium' : 'Середня'}
          </RadioLabel>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="option"
              value="high"
              checked={selectedOption === 'high'}
              onChange={handleOptionChange}
            />
            {i18n.language === 'en' ? 'High' : 'Складна'}
          </RadioLabel>
        </RadioButtonContainer>
      </RadioButtonsContainer>

      <ButtonContainer>
        {showEditBtn ? (
          <EditButton type="submit">
            <EditIcon>
              <use href={`${Icons}#edit-btn-s`}></use>
            </EditIcon>
            {i18n.language === 'en' ? 'Edit' : 'Редагувати'}
          </EditButton>
        ) : (
          <>
            <AddButton type="submit">
              <AddIcon>
                <use href={`${Icons}#add-btn-s`}></use>
              </AddIcon>
              {i18n.language === 'en' ? 'Add' : 'Додати'}
            </AddButton>
            <CancelButton type="button" onClick={closeModal}>
              {i18n.language === 'en' ? 'Cancel' : 'Відміна'}
            </CancelButton>
          </>
        )}
      </ButtonContainer>
    </Form>
  );
};

export default TaskForm;
