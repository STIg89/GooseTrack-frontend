import { useState } from "react";
import { StyledBtn } from "./AddFeedbackBtn.styled"
import FeedbackModal from "../AddFeedbackModal/AddFeedbackModal";

const FeedbackBtn = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleToggleModal = () => setIsOpened(!isOpened);

    return (
        <div>
            <StyledBtn type="button" onClick={handleToggleModal}>Feedback</StyledBtn>
            {isOpened && <FeedbackModal onCloseModal={handleToggleModal} />}
        </div>
        
    )
}

export default FeedbackBtn