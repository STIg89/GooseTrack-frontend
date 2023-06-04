import { useState } from 'react';
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
} from './TaskForm.styled';

export const TaskForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <Form>
      <InputContaiter>
        <Label>Title</Label>
        <Input type="text" placeholder="Enter text" />
      </InputContaiter>

      <InputTimeContaiter>
        <InputContaiter>
          <Label>Start</Label>
          <Input type="time" />
        </InputContaiter>

        <InputContaiter>
          <Label>End</Label>
          <Input type="time" />
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
    </Form>
  );
};
