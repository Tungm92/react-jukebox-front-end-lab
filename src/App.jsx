import React from 'react';
import TrackList from './components/TrackList/TrackList';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<TrackList />} />
    </Routes>
    </>
  );
};

export default App;
