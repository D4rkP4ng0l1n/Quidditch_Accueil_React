import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/Logo.svg";

const Navigation = () => {
    return (
        <header>
            <NavLink to="/">
                <img className="logo menu" src={logo} alt="Appuyer sur le logo pour revenir à l'accueil" />
            </NavLink>
            <div className="navigation">
                <ul>
                    <NavLink to="/joueurs">
                        <li> Joueurs </li>
                    </NavLink>
                    <NavLink to="/matchs">
                        <li> Matchs </li>
                    </NavLink>
                    <NavLink to="/statistiques">
                        <li> Statistiques </li>
                    </NavLink>
                    <button onClick={() => window.location.href = '/login'}> Login </button>
                </ul>
            </div>
        </header>
    );
};

export default Navigation;