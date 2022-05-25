import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useCallback, useEffect } from 'react';

import GamesPage from './features/games/GamesPage';
import NavBar from './components/Navbar';
import { getGames } from './features/games/gameSlice';
import { useAppDispatch } from './store/store';

function App() {

  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    await dispatch(getGames())
  }, [dispatch])


  useEffect(() => {
    initApp()
  })
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<GamesPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
