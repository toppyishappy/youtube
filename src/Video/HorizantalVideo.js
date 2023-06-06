
import VideoContainer from './Container';
import Stack from 'react-bootstrap/Stack';
import data from '../dataSrc.json'

const videoData = data.videoData

function HorizantalVideo(){
    return (
        <>
            {videoData.map((i, idx) => (
                <Stack direction="horizontal" className='align-items-start'>
                <VideoContainer data={i} width={300} height={250}/>
          <div className='align-items-start p-2'>
                  รวมเพลงฮิต เพลงเก่า SILLY FOOLS [ซิลลี่ ฟูลส์] l แกล้ง, คิดถึง, ขี้หึง, วัดใจ l
          </div>
          </Stack>
            ))}
          
        
        </>
    )
}

export default HorizantalVideo