import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
//import { useEpisodeStore } from "../store/episode";
import axios from 'axios';
import '../assets/styles/episode.css';

export default function Episode () {
  const { id } = useParams();
  const [episode, setEpisode] = useState("");
  //const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisode = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season1/${id}`);
        //const response = await axios.get(`https://capstone-back-end-ft5y.onrender.com/api/season1/${id}`);
        const result = response.data.data;
        setEpisode(result);
      } catch (error) {
        console.error(`Error fetching episode`, error);
      } finally {
        setLoading(false);
      }
    };
    getEpisode();
  }, [id]);

  //const { fetchEpisodes } = useEpisodeStore();

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="episode_container">
      <div className="episode">
        <div className="episode_title">
          <span>Episode {episode.num} : {episode.name}</span>
          <div className="btns">
            <Link to={``} className="watch_btn">Watch</Link>
            <Link to={`/api/season1/episodes/reviews`} className="review_btn">Reviews</Link>
          </div>
        </div>
        <div><h4><b>Plot :</b></h4> 
        <p>Duis cillum fugiat nostrud aliquip do proident. Qui id nostrud cupidatat dolor duis veniam voluptate fugiat exercitation. 
          Occaecat nisi ullamco cupidatat esse esse proident. Culpa fugiat eu sit in. Fugiat velit culpa dolor culpa ullamco nisi ad quis. 
          Fugiat cupidatat reprehenderit occaecat voluptate ullamco minim. Reprehenderit fugiat Lorem consectetur ullamco 
          incididunt voluptate nulla excepteur do labore irure.
        </p></div>
        <div className="characters_container">
          <h4><b>Characters</b></h4>
          <div>
            image
          </div>
          

        </div>

      </div>
      <div className="review_container">
        {/* <span>Reviews</span> */}
        {/* <div>
          {reviews.map((review) => (
            <ReviewCard key={ReviewCard.episode} review={review} />
          ))}
        </div> */}

      </div>
    </div>
  );
};