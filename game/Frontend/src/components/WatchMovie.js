import React from 'react'
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import PostData from '../data/video.json'

function WatchMovie() {
    const location = useLocation();
    const index = location.state.params;
    const ref = React.createRef()
    return (
        <div>
            
            <ReactPlayer 
            ref={ref}
 
            url={require("../"+PostData[index].src)} 
            // playing
            controls 
            />
            <button onClick={() => ref.current.seekTo(15)}>Seek to 00:10</button>
            
        </div>
    )
}

export default WatchMovie
