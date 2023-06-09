import { useState } from 'react';

import {
  AddBtn,
  ColumnHeader,
  Status,
  SvgStyled,
} from './ColumnHeadBar.Styled';
import TaskModal from '../TaskModal/TaskModal';

import Icons from 'images/sprite.svg';

const ColumnHeadBar = ({ headName, addCategory }) => {
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

      {isOpened && (
        <TaskModal
          onCloseModal={handleToggleModal}
          addCategory={addCategory}
          isOpened={isOpened}
        />
      )}
    </>
  );
};

export default ColumnHeadBar;
