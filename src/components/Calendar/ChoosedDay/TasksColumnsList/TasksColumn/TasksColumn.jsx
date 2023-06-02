import { AddBtn, ColumnHeader } from './TasksColumn.Styled';
import Icons from '../../../../../images/sprite.svg';
import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';

const TasksColumn = ({ headName }) => {
  return (
    <>
      {' '}
      <ColumnHeader>
        <div>{headName}</div>

        <AddBtn>
          <svg stroke="black" width={12} height={12}>
            <use href={`${Icons}#profile-plus-s`}></use>
          </svg>
        </AddBtn>
      </ColumnHeader>
      <ColumnsTasksList></ColumnsTasksList>
    </>
  );
};
export default TasksColumn;
