import React, { createContext, useState } from 'react';
import data from '../dataSrc.json'


const VideoContext = React.createContext();

const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState(data.videoData);
  const setNewVideoData = (videoId, newTime) => {
    setVideoData(prev => {
      return prev.map( i => {
          if(i.videoId === videoId){
              return {...i, currentTime: 15}
          }
          return i
      })
  })
  }
  return (
    <VideoContext.Provider value={{ videoData, setNewVideoData }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoProvider, VideoContext };