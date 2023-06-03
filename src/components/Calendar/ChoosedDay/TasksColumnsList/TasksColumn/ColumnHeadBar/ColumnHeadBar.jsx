import {
  AddBtn,
  ColumnHeader,
  Status,
  SvgStyled,
} from './ColumnHeadBar.Styled';
import Icons from '../../../../../../images/sprite.svg';
const ColumnHeadBar = ({ headName }) => {
  return (
    <ColumnHeader>
      <Status>{headName}</Status>

      <AddBtn>
        <SvgStyled>
          <use href={`${Icons}#profile-plus-s`}></use>
        </SvgStyled>
      </AddBtn>
    </ColumnHeader>
  );
};

export default ColumnHeadBar;
