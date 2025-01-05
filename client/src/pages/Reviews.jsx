import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
//import { useEpisodeStore } from "../store/episode";
import axios from 'axios';
import '../assets/styles/reviews.css';

export default function Reviews () {
  //const { id } = useParams();
  const [reviews, setReviews] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season1/episode1/reviews`);
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
          <span>Episode {reviews[0].id} : {reviews[0].name}</span>
        </div>

        <div><h4><b>Reviews </b></h4></div> 
      </div>
    </div>

  );

};

