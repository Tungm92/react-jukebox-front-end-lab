import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PlayTrack from '../PlayTrack/PlayTrack';


const TrackList = ({ getTracks, deleteTrack }) => {
const [tracks, setTracks] = useState([]);
const navigate = useNavigate()
const [nowPlaying, setNowPlaying] = useState(null);

const handleNavigate = () => {
  navigate('/add-track')
}

const handleDelete = async (id) => {
  try {
    await deleteTrack(id);
    setTracks(tracks.filter(track => track._id !== id));
  } catch (error) {
    console.error('Failed to delete track:', error);
  }
};

const handlePlayClick = (track) => {
  setNowPlaying(track);
};

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
        <button onClick={() => handlePlayClick(track)}>Play</button>
          <Link to={`/edit-track/${track._id}`}>Edit</Link>
          <button onClick={() => handleDelete(track._id)}>Delete</button>
        </div>
        </li>
      ))}
    </ul>
    {nowPlaying && <PlayTrack track={nowPlaying} />}

  </div>
);
}
export default TrackList;