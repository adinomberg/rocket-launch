import React from 'react';
import ReactPlayer from 'react-player'
import '../LaunchDetails.scss'

const VideoDetails = ( { vidURL } ) => {
    return (
        <>
            <div className="vidURL-container">
                <h3>Video</h3>
                <div className="video-container">
                    <ReactPlayer url={vidURL} />
                </div>
            </div>
            <b className="hr"></b>
        </>
    );
};

export default VideoDetails;