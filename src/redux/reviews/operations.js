import axios from 'axios';

export const fetchAllReviews = async () => {
    const response = await axios.get(`api/reviews`);
    return response;
  };
  