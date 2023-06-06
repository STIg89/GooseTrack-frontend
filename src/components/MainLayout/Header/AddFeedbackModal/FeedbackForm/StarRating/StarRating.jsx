import React from "react";
import './StarRating.css'

const StarRating = () => {
    return (
        <div className="rating">
            <div className="rating-items">
              <input
                id="rating-5"
                type="radio"
                name="rating"
                className="rating-item"
                value="5"
              />
              <label htmlFor="rating-5" className="rating-label"></label>
              <input
                id="rating-4"
                type="radio"
                name="rating"
                className="rating-item"
                value="4"
              />
              <label htmlFor="rating-4" className="rating-label"></label>
              <input
                id="rating-3"
                type="radio"
                name="rating"
                className="rating-item"
                value="3"
              />
              <label htmlFor="rating-3" className="rating-label"></label>
              <input
                id="rating-2"
                type="radio"
                name="rating"
                className="rating-item"
                value="2"
              />
              <label htmlFor="rating-2" className="rating-label"></label>
              <input
                id="rating-1"
                type="radio"
                name="rating"
                className="rating-item"
                value="1"
              />
              <label htmlFor="rating-1" className="rating-label"></label>
            </div>
          </div>
    )
}

export default StarRating;