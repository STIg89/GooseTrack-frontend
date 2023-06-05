import { useState } from 'react';

import {
  AddBtn,
  ColumnHeader,
  Status,
  SvgStyled,
} from './ColumnHeadBar.Styled';
import TaskModal from '../TaskModal/TaskModal';

import Icons from 'images/sprite.svg';

const ColumnHeadBar = ({ headName }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <>
      <ColumnHeader>
        <Status>{headName}</Status>

        <AddBtn onClick={handleToggleModal}>
          <SvgStyled>
            <use href={`${Icons}#profile-plus-s`}></use>
          </SvgStyled>
        </AddBtn>
      </ColumnHeader>

      {isOpened && <TaskModal onCloseModal={handleToggleModal} />}
    </>
  );
};

export default ColumnHeadBar;
