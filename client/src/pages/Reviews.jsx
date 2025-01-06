import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../assets/styles/reviews.css';
import ReviewCard from '../components/ReviewCard';

export default function Reviews () {
  const [reviews, setReviews] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season1/episodes/reviews`);
        const results = response.data.data;
        setReviews(results);
      } catch (error) {
        console.error(`Error fetching episode`, error);
      } finally {
        setLoading(false);
      }
    };
     getReviews();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="reviews_container">
      <div className="reviews">
        <div className="reviews_title">
          <span>Season 1</span>
          <Link to={`/api/season1/episodes/reviews/add`} className="add_btn">Add Review</Link>
        </div>
        <div><h4><b>Reviews </b></h4></div>
        <div className="review_lists">
          {reviews.map((review) => (  
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
        <div>
          {/* <div key={review._id}>
              <h3>{review.title}</h3>
              <p>by {review.user} on {review.published}</p>
              <p>{review.content}</p> 
            </div> */}
          
            
        </div>
      </div>
    </div>

  );

};

