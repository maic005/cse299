import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAudioContext } from '../../hooks/useAudioContext';
import { BiPlus } from 'react-icons/bi';
import './Home.css';

const Dashboard = () => {

  const [tracks, setTracks] = useState([]);
  const {song, dispatch} = useAudioContext();

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/api/tracks")
    .then((res) => {
      console.log(res.data)
      setTracks(res.data)
    })
  },[])

  return( 
    <div className="home-container">
      {tracks ?
        <div className="tracks-container">
          <h1 className="tracks-heading">Tracks</h1>
          {tracks.map((track,index) => {
            return (
              <div className="track" key={index}>
                <Link to={`album/${track.albumId}`} className="track-image-container">
                  <img src={track.imgUrl} className="track-image" />
                </Link>
                <div className="track-info-container">
                  <p className="track-name" onClick={() => dispatch({type: 'SET_AUDIO', payload: track.songUrl})}>{track.name}</p>
                  <BiPlus className="add-track-icon" onClick={() => dispatch({type: 'QUEUE_AUDIO', payload: track.songUrl})}/>
                </div>
              </div>
            )
          })}
        </div>
          : null}
    </div>
  )
};

export default Dashboard;
