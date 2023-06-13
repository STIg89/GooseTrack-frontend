import { useState } from 'react';
import { StyledBtn } from './AddFeedbackBtn.styled';
import FeedbackModal from '../AddFeedbackModal/AddFeedbackModal';

import { useTranslation } from 'react-i18next';

const FeedbackBtn = () => {
  const { i18n } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <div>
      <StyledBtn type="button" onClick={handleToggleModal}>
        {i18n.language === 'en' ? 'Feedback' : 'Відгук'}
      </StyledBtn>
      {isOpened && (
        <FeedbackModal onCloseModal={handleToggleModal} isOpened={isOpened} />
      )}
    </div>
  );
};

export default FeedbackBtn;
