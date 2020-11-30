import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainScreen from './components/MainScreen'
import Player from './components/Player'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
      <Player />
    </div>
  );
}

export default App;
