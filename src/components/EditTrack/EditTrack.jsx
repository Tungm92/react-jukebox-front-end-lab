import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    title: '',
    artist: '',
  };
  

const EditTrack = ({ updateTrack, getTrackId }) => {
    const [formData, setFormData] = useState(initialState);
    const {id} = useParams()
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const track = await getTrackId(id)
                setFormData({ title: track.title, artist: track.artist });
             } catch (error) {
                console.error('Failed to fetch track:', error);
              }
            }
        fetchTracks()
    }, [id])
    
    
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await updateTrack(id, formData)
            navigate('/')
        }
        catch(error){
            console.log(error)
        }
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

export default EditTrack;