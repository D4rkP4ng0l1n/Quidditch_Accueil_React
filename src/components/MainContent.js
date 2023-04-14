import React from 'react';
import imgAccueil from "../assets/images/ImgAccueil.png";


const MainContent = () => {
    return (
        <div>
            <h1 className='center'> Titre </h1>
            <img className='imgAccueil' src={imgAccueil} alt="Image d'accueil" />
        </div>
    );
};

export default MainContent;