import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import VideoCard from '../Video/Card'
import { useLoaderData, useParams } from 'react-router-dom';
import SideTabContainer from '../SideTab/Container'
import { useContext } from 'react';
import { VideoContext} from '../context/VideoProvide';

function HomePage(){
    // const {videoData} = useLoaderData();
    const { videoData, toggleTheme } = useContext(VideoContext)
    
    return(
        <>
        <Row style={{top: '50px', position: 'absolute'}}>
         <Col xs={2} className='sidetab-container'>
           <SideTabContainer/>
         </Col>
         <Col xs={1} className='sidetabIcon-container'>
           <SideTabContainer noText />
         </Col>
         <Col>
         <Container>
         <Row xs={1} md={2} xl={3}>
           {videoData.map((i, idx) => (
               <VideoCard key={idx} data={i}/>
           ))}
         </Row>
         </Container>
         </Col>
        
       </Row>
      </>
    )
}

export default HomePage