import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/Logo.svg";

const NavigationFooter = () => {
    return (
        <div className='navigationFooter'>
            <img className='logo' src={logo} alt="Logo de l'application" />
            <div className='menuFooter'>
                <h2> Lorem </h2>
                <ul>
                    <NavLink to="/joueurs">
                        <li> Joueurs </li>
                    </NavLink>
                    <NavLink to="/matchs">
                        <li> Matchs </li>
                    </NavLink>
                </ul>
            </div>
            <div className='menuFooter'>
                <h2> Lorem </h2>
                <ul>
                    <NavLink to="/lorem">
                        <li> lorem </li>
                    </NavLink>
                    <NavLink to="/lorem">
                        <li> lorem </li>
                    </NavLink>
                    <NavLink to="/lorem">
                        <li> lorem </li>
                    </NavLink>
                </ul>
            </div>
            <div className='menuFooter'>
                <h2> Lorem </h2>
                <ul>
                    <NavLink to="/lorem">
                        <li> lorem </li>
                    </NavLink>
                    <NavLink to="/lorem">
                        <li> lorem </li>
                    </NavLink>
                    <NavLink to="/lorem">
                        <li> lorem </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavigationFooter;