import Modal from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackList from './FeedbackList/FeedbackList';
import axios from 'axios';

const FeedbackModal = ({ onCloseModal }) => {
  const [reviews, setReviews] = useState('');

  const fetchData = async () => {
    const response = await axios.get(`api/reviews/user`);
    setReviews(response.data.data);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Modal onCloseModal={onCloseModal}>
      <FeedbackForm fetchData={fetchData} />
      <FeedbackList fetchData={fetchData} setReviewsList={reviews} />
    </Modal>
  );
};

export default FeedbackModal;
