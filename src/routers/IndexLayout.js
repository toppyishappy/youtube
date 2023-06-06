import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavbarComponent from '../Navbar';
import { Outlet } from "react-router-dom";

function IndexLayout(){
    return(
        <>
        <Row>
          <Col><NavbarComponent/></Col>
        </Row>
        <Row>
        <Col>
        <Outlet/>
        </Col>
      </Row>
      </>
    )
}

export default IndexLayout