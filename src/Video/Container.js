import YouTube from 'react-youtube';
import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { VideoContext} from '../context/VideoProvide';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function VideoContainer(props){
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    const { videoData, setNewVideoData } = useContext(VideoContext)
    const [videoWidth, setVideoWidth] = useState(props.width||600)
    const [videoHeight, setVideoHeight] = useState(337)
    const data = videoData.filter(i => i.videoId === props.data.videoId)[0]
    let intervalId
    let timeoutId
    
    const handleChangeSize = useCallback(() => {
        if(videoRef != null){
            // ratio 16:9

            const windowWidth = window.innerWidth
            const targetWidth = windowWidth * 0.8
            const targetHeight = Math.floor((targetWidth*9)/16)
            setVideoWidth(targetWidth)
            setVideoHeight(targetHeight)
        }
    }, [])
    // const handleChangeSize = () => {
    //     console.log('xxxxxxxx')     
    //     if(videoRef != null){
    //         // ratio 16:9

    //         const windowWidth = window.innerWidth
    //         const targetWidth = windowWidth * 0.8
    //         const targetHeight = Math.floor((targetWidth*9)/16)
    //         setVideoWidth(targetWidth)
    //         setVideoHeight(targetHeight)
    //     }
        
    // }
    useEffect(() => {
        window.addEventListener('resize', handleChangeSize)
        return function cleanup() {
            window.removeEventListener("resize", handleChangeSize);
          };
    },[handleChangeSize])
    const trackTime = (e, videoId) => {
        
        if(e.data === 1){
            intervalId = setInterval(() => {
                const time = e.target.getCurrentTime()
                setNewVideoData(videoId, time)
            }, 5000)
            
        }
        else if(e.data === 3){
            const time = e.target.getCurrentTime()
            setNewVideoData(videoId, time)
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        clearInterval(intervalId)
        clearTimeout(timeoutId)
    }

    const handleMouseEnter = () => {
        timeoutId = setTimeout(() => {
            setIsHovered(true)
        }, 2000)
        
    }
    return(
        <>
        {props.autoplay?
            <Row>
                <Col>
                <YouTube ref={videoRef} videoId={data.videoId} opts={{ height: videoHeight, width: videoWidth, playerVars: {start: data.currentTime, autoplay: 1 , mute: 1} }} onStateChange={e => trackTime(e, data.videoId)}/>
                </Col>
                
            </Row>
            :
            <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='video-container'>
            {isHovered ? (
        <YouTube videoId={data.videoId} opts={{ height: 186, width: props.width, playerVars: { autoplay: 1 , mute: 1} }} onStateChange={e => trackTime(e, data.videoId)}/>
      ):
      (<YouTube videoId={data.videoId} opts={{ height: 186, width: props.width, playerVars: { autoplay: 0 } }}/>)}
        </div>
        }
        </>
        
    )
}

export default VideoContainer;