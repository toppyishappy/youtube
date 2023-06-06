
import ListGroup from 'react-bootstrap/ListGroup';
import SideTab from './SideTab';
import { faHouse, faCirclePlay, faClock, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';

const tabList = [
    {text: 'Home', icon: faHouse},
    {text: 'Short', icon: faCirclePlay},
    {text: 'Following', icon: faClock},
    {text: 'Gallary', icon: faBookOpen},
]


function SideTabContainer({noText}){
    
    return(
        <Container>
            <ListGroup style={{position: 'fixed', width: '20%'}}>
            {tabList.map((i, idx) => (
                
                <SideTab icon={i.icon} text={i.text} noText={noText}/>
            ))}
        </ListGroup>
    
        </Container>
    )
        
}

export default SideTabContainer