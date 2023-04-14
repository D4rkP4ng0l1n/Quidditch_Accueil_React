import React from 'react';

const Card = ({ character }) => {
    return (
        <div className='card'>
            <img className="harryPotterImage" src={character.image} alt={"Image de " + character.name} />
            <h2 className='center'> {character.name} </h2>
            <p> {character.dateOfBirth} </p>
            <p> {character.house} </p>
            <p> {character.patronus} </p>
            <p> {character.actor} </p>
        </div>
    );
};

export default Card;