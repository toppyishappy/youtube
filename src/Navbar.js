import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function NavbarComponent(){
    return(
          <Navbar bg="light" className="mb-3" fixed='top'>
            <Container fluid>
              <Navbar.Brand href="#">YouNube</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around ">
            <Nav >
            <InputGroup className="">
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                type='search'
              />
              <Button variant="outline-success">Search</Button>
            </InputGroup>
            </Nav>
          </Navbar.Collapse>
          
            </Container>
          </Navbar>
    )
  }

  export default NavbarComponent;