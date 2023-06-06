import Modal from "components/Modal/Modal";
import React from "react";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import FeedbackList from "./FeedbackList/FeedbackList";

const FeedbackModal = ({ onCloseModal }) => {
    return (
        <Modal onCloseModal={onCloseModal}>
            <FeedbackForm/>
            <FeedbackList/>
        </Modal>
    )
}

export default FeedbackModal