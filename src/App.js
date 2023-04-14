import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Joueurs from './pages/Joueurs';
import Matchs from './pages/Matchs';
import Statistiques from './pages/Statistiques';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joueurs" element={<Joueurs />} />
        <Route path="/matchs" element={<Matchs />} />
        <Route path="/statistiques" element={<Statistiques />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;