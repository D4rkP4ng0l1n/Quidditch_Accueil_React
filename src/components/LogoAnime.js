import React from 'react';
import logo from "../assets/images/Logo.svg";

const LogoAnime = () => {
    return (
        <div>
            <img className='logo anime' src={logo} alt='Logo qui tourne sur lui même'></img>
        </div>
    );
};

export default LogoAnime;