import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const TrackList = ({ getTracks, updateTrack, deleteTrack }) => {
const [tracks, setTracks] = useState([]);
const navigate = useNavigate()

const handleNavigate = () => {
  navigate('/add-track')
}

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
    <button onClick={handleNavigate}>Add New Track</button>
    <h1>Track List</h1>
    <ul>
      {tracks.map(track => (
        <li key={track._id}>
        <p>{track.title}</p>
        <p>{track.artist}</p>
        <div>
          <button>Play</button>
          <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
          <button onClick={deleteTrack}>Delete</button>
        </div>
        </li>
      ))}
    </ul>
  </div>
);
}
export default TrackList;