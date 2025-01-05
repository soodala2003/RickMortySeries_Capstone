import React from 'react';
//import { Link } from 'react-router-dom';
//import '../assets/styles/RecipeCard.css';

const ReviewCard = ({ review }) => {
  return (
    <div className="review_card">
      <h3>{review.title}</h3>
      <span>by {review.user} at {review.createdAt}</span>
      <p>{review.content}</p>
    </div>
  );
};
  
export default ReviewCard;