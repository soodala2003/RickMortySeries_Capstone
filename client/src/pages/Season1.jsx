import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Season1 () {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season1`);
        const results = response.data.data;
        //const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
        //const results = response.data.results;
        console.log(results[0]);
        setEpisodes(results);
      } catch (e) {
        console.error('Error fetching episodes', e);
      } finally {
        setLoading(false);
      }
    };
    getEpisodes();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div>
        <h2>Season 1</h2>
      </div>
      <ul>
        {episodes.map((episode) => (
          <li key={episode._id}>
            <Link to={`/api/season1/${episode._id}`} className="link">{episode.name}</Link>

            <div>
              <Link to={`/api/season1/${episode._id}`} className="btn">{episode.air_date}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

