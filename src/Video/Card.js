import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import VideoContainer from './Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function VideoCard({data, autoplay, width}){
  const navigate = useNavigate();
  
  const handleClick = (videoId) => {
    navigate('/'+videoId)
  }
    return(
      <Col className='side-video-verticle'>
          <Card className='m-1 p-3 card-content' border="light" onClick={() => handleClick(data.videoId)} >
            <VideoContainer data={data} autoplay={autoplay} width={width}/>
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <Image className='avatar' src="https:.newsweek.com/en/full/2027477/avatar-2-movie.jpg" roundedCircle />
                </Col>
                <Col>รวมเพลงฮิต เพลงเก่า SILLY FOOLS [ซิลลี่ ฟูลส์] l แกล้ง, คิดถึง, ขี้หึง, วัดใจ l</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default VideoCard;