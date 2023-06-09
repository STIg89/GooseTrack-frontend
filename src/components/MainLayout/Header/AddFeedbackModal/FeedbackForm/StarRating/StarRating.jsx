import React, { useState } from 'react';
import './StarRating.css';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = () => {
  const onStarClickClick = nextValue => {
    changeRate(nextValue);
  };
  const changeRate = val => {
    setNewRate(val);
  };
  const [newRate, setNewRate] = useState(0);
  return (
    <StarRatingComponent
      name="rate1"
      starCount={5}
      value={newRate}
      onStarHover={e => onStarClickClick(e)}
    />
    // <div className="rating">
    //     <div className="rating-items">
    //       <input
    //         id="rating-5"
    //         type="radio"
    //         name="rating"
    //         className="rating-item"
    //         value="5"
    //       />
    //       <label htmlFor="rating-5" className="rating-label"></label>
    //       <input
    //         id="rating-4"
    //         type="radio"
    //         name="rating"
    //         className="rating-item"
    //         value="4"
    //       />
    //       <label htmlFor="rating-4" className="rating-label"></label>
    //       <input
    //         id="rating-3"
    //         type="radio"
    //         name="rating"
    //         className="rating-item"
    //         value="3"
    //       />
    //       <label htmlFor="rating-3" className="rating-label"></label>
    //       <input
    //         id="rating-2"
    //         type="radio"
    //         name="rating"
    //         className="rating-item"
    //         value="2"
    //       />
    //       <label htmlFor="rating-2" className="rating-label"></label>
    //       <input
    //         id="rating-1"
    //         type="radio"
    //         name="rating"
    //         className="rating-item"
    //         value="1"
    //       />
    //       <label htmlFor="rating-1" className="rating-label"></label>
    //     </div>
    //   </div>
  );
};

export default StarRating;
