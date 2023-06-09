import { useState } from 'react';
import { StyledBtn } from './AddFeedbackBtn.styled';
import FeedbackModal from '../AddFeedbackModal/AddFeedbackModal';

import { useTranslation } from 'react-i18next';

const FeedbackBtn = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => setIsOpened(!isOpened);

  const { t } = useTranslation();

  return (
    <div>
      <StyledBtn type="button" onClick={handleToggleModal}>
        {t('Feedback')}
      </StyledBtn>
      {isOpened && <FeedbackModal onCloseModal={handleToggleModal} />}
    </div>
  );
};

export default FeedbackBtn;
