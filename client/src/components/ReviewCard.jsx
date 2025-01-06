import React from 'react';
//import { Link } from 'react-router-dom';
import '../assets/styles/reviews.css';

const ReviewCard = ({ review }) => {
  return (
    <div className="review_card">
      <h3 className="title">{review.title}</h3>
      <p>by <b>{review.user}</b> on <b>{review.published}</b></p>
      <p>{review.content}</p>
    </div>
  );
};
  
export default ReviewCard;