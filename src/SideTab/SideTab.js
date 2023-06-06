import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideTab({icon, text, noText}){
    return(
        
    <ListGroup.Item action className='border-0'>
        <Stack direction="horizontal" gap={3}>
        <FontAwesomeIcon icon={icon} />
            {!noText && <div>{text}</div>}
        
        
        </Stack>
    </ListGroup.Item>
    )
}

export default SideTab