import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GamesPage from './features/games/FieldPage';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GamesPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
