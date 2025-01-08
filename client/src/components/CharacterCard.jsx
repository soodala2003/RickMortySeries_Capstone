import React from 'react';
import '../assets/styles/cards.css';

export const CharacterCard = ({ character }) => {
  return (
    <div className="character_card">
      <img src={character.image} alt={character.name} />
      <b>{character.name}</b>
    </div>
  );
};