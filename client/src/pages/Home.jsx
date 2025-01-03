import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import season1 from '../assets/images/season1.png';
import season2 from '../assets/images/season2.png';
import season3 from '../assets/images/season3.png';
import season4 from '../assets/images/season4.jpg';
import season5 from '../assets/images/season5.jpg';
import season6 from '../assets/images/season6.jpg';
import season7 from '../assets/images/season7.jpg';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <Link className="season1" to={`/api/episodes1`}><b>Season 1</b></Link>
        <div className="carousel">
          <Image src={season1} alt="Rick_and_Morty_season1" rounded />      
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Link className="season2" to={`/api/episodes2`}><b>Season 2</b></Link>
        <div className="carousel">
          <Image src={season2} alt="Rick_and_Morty_season2" rounded />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Link className="season3" to={`/api/episodes3`}><b>Season 3</b></Link>
        <div className="carousel">
          <Image src={season3} alt="Rick_and_Morty_season3" rounded />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Link className="season4" to={`/api/episodes4`}><b>Season 4</b></Link>
        <div className="carousel">
          <Image src={season4} alt="Rick_and_Morty_season4" rounded /> 
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Link className="season5" to={`/api/episodes5`}><b>Season 5</b></Link>
        <div className="carousel">
          <Image src={season5} alt="Rick_and_Morty_season5" rounded />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Link className="season6" to={`/api/episodes6`}><b>Season 6</b></Link>
        <div className="carousel">
          <Image src={season6} alt="Rick_and_Morty_season6" rounded />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Link className="season7" to={`/api/episodes7`}><b>Season 7</b></Link>
        <div className="carousel">
          <Image src={season7} alt="Rick_and_Morty_season7" rounded />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;