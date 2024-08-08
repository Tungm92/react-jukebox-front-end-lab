import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    title: '',
    artist: '',
  };
  

const TrackForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const { trackId } = useParams();

    
    useEffect(() => {
        const fetchTracks = async () => {
            if(trackId) {
                
            }
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        props.createTrack(formData)
        setFormData(initialState)
        navigate('/')
    }   
    
    const handleChange = ({target}) => {
        setFormData({ ...formData, [target.name]: target.value });
    } 
    
    return (
    <>
    {}
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Track Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="artist">Track Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
    </>
    )

}

export default TrackForm;