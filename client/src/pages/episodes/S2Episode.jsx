import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { CharacterCard } from '../../components/CharacterCard';
import axios from 'axios';
import '../../assets/styles/episodes.css';

export default function S2Episode () {
  const { id } = useParams();
  const [episode, setEpisode] = useState("");
  //const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisode = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season2/${id}`);
        //const response = await axios.get(`https://capstone-back-end-ft5y.onrender.com/api/season2/${id}`);
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

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="episode_container">
      <div className="episode">
        <div className="episode_title2">
        <h2><b>Season 2</b></h2>
          <span>Episode {episode.num} : {episode.name}</span>
          <div className="btns">
            <Link to={``} className="watch_btn2">Watch</Link>
            {/* <Link to={`/api/season2/episodes/reviews`} className="review_btn2">Reviews</Link> */}
          </div>
        </div>
        <div><h4><b>Plot :</b></h4> 
        <p>Sunt ullamco in exercitation commodo ea ad voluptate voluptate non culpa ad eu pariatur. 
            Lorem cupidatat minim laboris dolore ea commodo ad do minim non et minim irure ullamco. 
            Ex consequat amet do ut do voluptate sint ipsum non.
        </p></div>
        <div className="characters_container">
          <h4><b>Characters :</b></h4>
          <div className="characters">
          {episode.characters.map((character, index) => (
            <li key={index}>
              <div className="character_list">
                <CharacterCard key={character.id} character={character} />
              </div>
            </li>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};