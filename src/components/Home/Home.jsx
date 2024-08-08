import TrackForm from "../TrackForm/TrackForm";
import TrackList from "../TrackList/TrackList";
import EditTrack from "../EditTrack/EditTrack";
import { Route, Routes } from 'react-router-dom';
import { getTracks, createTrack, updateTrack, deleteTrack, getTrackId } from '../../services/trackService'


const Home = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<TrackList getTracks={getTracks} updateTrack={updateTrack} deleteTrack={deleteTrack}/>}></Route>
                <Route path="/add-track" element={<TrackForm createTrack={createTrack}/>}></Route>
                <Route path="/edit-track/:id" element={<EditTrack updateTrack={updateTrack} getTrackId={getTrackId}/>}></Route>
            </Routes>
        </>
    )
}

export default Home