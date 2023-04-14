import React from 'react';
import Navigation from '../components/NavigationHeader';

const Login = () => {
    return (
        <div>
            <Navigation />
            <h1> Login </h1>
            <form action="POST">
                Utilisateur <input type="text" />
                Mot de passe <input type="password" />
            </form>
        </div>
    );
};

export default Login;