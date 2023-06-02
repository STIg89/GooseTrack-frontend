import { TaskBtn, TaskBtnsvg } from './AddTaskBtn.Styled';

import Icons from '../../../../../../images/sprite.svg';

const AddTaskBtn = () => {
  return (
    <TaskBtn type="button" onClick={() => console.log('click add btn')}>
      <TaskBtnsvg>
        <use href={`${Icons}#add-btn-s`}></use>
      </TaskBtnsvg>
      Add task
    </TaskBtn>
  );
};
export default AddTaskBtn;
