import data from '../dataSrc.json'
import VideoCard from '../Video/Card'
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const videoData = data.videoData

function SideVideo(){
    return(
        <>
            <ListGroup>
            {videoData.map((i, idx) => (
               <VideoCard key={idx} data={i} width={300} height={250}/>
           ))}
           
        </ListGroup>
    
        </>
        
    )
}

export default SideVideo;