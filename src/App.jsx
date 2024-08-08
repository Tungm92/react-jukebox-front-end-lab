import React from 'react';
import { useState } from 'react';
import TrackList from './components/TrackList/TrackList.jsx';
import { Route, Routes } from 'react-router-dom';
import { getTracks, createTrack, updateTrack, deleteTrack } from './services/trackService.js'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<TrackList getTracks={getTracks}/>} />
    </Routes>
    </>
  );
};

export default App;
