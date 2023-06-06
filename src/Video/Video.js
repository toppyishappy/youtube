import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const VideoComponent = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const {data} = props

      return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='video-container'>
          {data}
            {/* {isHovered ? (
        <YouTube videoId={data.videoId} opts={{ height: 186, width: 331, playerVars: { autoplay: 1 , mute: 1} }} />
      ):
      (<YouTube videoId={data.videoId} opts={{ height: 186, width: 331, playerVars: { autoplay: 0 } }}/>)} */}
        </div>
        
      )
};

export default VideoComponent;
