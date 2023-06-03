import { AddBtn, ColumnHeader } from './ColumnHeadBar.Styled';
import Icons from '../../../../../../images/sprite.svg';
const ColumnHeadBar = ({ headName }) => {
  return (
    <div>
      <ColumnHeader>
        <div>{headName}</div>

        <AddBtn>
          <svg stroke="black" width={12} height={12}>
            <use href={`${Icons}#profile-plus-s`}></use>
          </svg>
        </AddBtn>
      </ColumnHeader>
    </div>
  );
};

export default ColumnHeadBar;
