
import { useLoaderData, useParams } from 'react-router-dom';
import VideoCard from '../Video/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import SideVideo from '../SideTab/SideVideo'
import HorizantalVideo from '../Video/HorizantalVideo'
import {useState, useEffect, useCallback} from 'react'

function DetailPapge(){
    let { videoId } = useParams();
    const {videoData} = useLoaderData();

    const data = videoData.filter(i => i.videoId === videoId)[0]
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, [])
    useEffect(() => {
        

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);
    return(
        <Container   style={{top: '50px', position: 'absolute'}}>
            <Row>
                <Col md={12} lg={9}>
                <VideoCard data={data} width={700} autoplay />
                </Col>
                {/* {screenWidth > 992 ?  : 2} */}
                {screenWidth > 992 ? (
                <Col lg={3} md={12}>
                <SideVideo/>
                </Col>
                ):
                <HorizantalVideo/>}
                {/* } */}
            </Row>
            
         </Container>
    )
}

export default DetailPapge;