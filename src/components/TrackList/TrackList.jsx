import React from 'react';
import { useState, useEffect } from 'react';


const TrackList = ({ getTracks }) => {
const [tracks, setTracks] = useState([]);

useEffect(() => {
  const fetchTracks = async () => {
    try {
      const data = await getTracks();
      setTracks(data);
    } catch (error) {
      console.error('Failed to fetch tracks:', error);
    }
  };

  fetchTracks();
}, [getTracks]);

return (
  <div>
    <h1>Track List</h1>
    <ul>
      {tracks.map(track => (
        <li key={track._id}><p>{track.title}</p><p>{track.artist}</p></li>
      ))}
    </ul>
  </div>
);
}
export default TrackList;