import Modal from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackList from './FeedbackList/FeedbackList';
import axios from 'axios';

const FeedbackModal = ({ onCloseModal, isOpened }) => {
  const [reviews, setReviews] = useState('');
  const [animationModal, setAnimationModal] = useState(isOpened);

  const fetchData = async () => {
    const response = await axios.get(`api/reviews/user`);
    setReviews(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Modal
      onCloseModal={onCloseModal}
      isOpened={isOpened}
      animationModalOnSubmit={animationModal}
    >
      <FeedbackForm
        fetchData={fetchData}
        setAnimationModal={setAnimationModal}
        onCloseModal={onCloseModal}
      />
      <FeedbackList
        fetchData={fetchData}
        setReviewsList={reviews}
        setAnimationModal={setAnimationModal}
        onCloseModal={onCloseModal}
        animationModal={animationModal}
      />
    </Modal>
  );
};

export default FeedbackModal;
