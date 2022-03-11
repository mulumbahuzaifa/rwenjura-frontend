import React from "react";

const Rating = ({ value, text, award }) => {
  return (
    <div className="rating review-star">
      <div>
        {value >= 1 ? (
          <div>Poor</div>
        ) : value >= 2 ? (
          <div>Fair</div>
        ) : value >= 3 ? (
          <div>Good</div>
        ) : value >= 4 ? (
          <div>Very Good</div>
        ) : value == 0 ? (
          <div>No Ratings</div>
        ) : (
          <div>Excellent</div>
        )}
      </div>
      <i
        className={
          value >= 1
            ? "fas fa-star"
            : value >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 3
            ? "fas fa-star"
            : value >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 4
            ? "fas fa-star"
            : value >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 5
            ? "fas fa-star"
            : value >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <div>
        <span>{text && text}</span>
      </div>
    </div>
  );
};

export default Rating;
