import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ReviewCard from '../../components/ReviewCard';
import { useReviewStore } from '../../store/reviewStore';
import '../../assets/styles/reviews.css';

export default function Reviews () {
  const { getReviews, reviews } = useReviewStore();

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <div className="reviews_container">
      <div className="reviews">
        <div className="reviews_title">
          <h2><b>Reviews</b> </h2>
          <Button variant="dark" className="add_btn">
            <Link className="add_btn" to={`/api/reviews/add`}>Add Review</Link></Button>
        </div>
        <div className="review_lists">
          {reviews.map((review) => (  
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

