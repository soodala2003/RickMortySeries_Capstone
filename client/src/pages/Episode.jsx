import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
//import { useSourceStore } from "../store/source";
import axios from 'axios';
//import '../assets/styles/season1.css';

export default function Episode () {
  const { id } = useParams();
  console.log(id);
  const [episode, setEpisode] = useState("");
  //const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisode = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season1/${id}`);
        const result = response.data.data;
        setSource(result);
      } catch (error) {
        console.error(`Error fetching episode`, error);
      } finally {
        setLoading(false);
      }
    };
    getEpisode();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="episode_container">
      <div className="episode">
        <div>Episode {episode.index}: {episode.name}</div>
        <div>Plot: </div>
        <div className="characters_container">
          <h3>Characters</h3>
          <div>
            image
          </div>

        </div>

      </div>
    </div>
  );
};