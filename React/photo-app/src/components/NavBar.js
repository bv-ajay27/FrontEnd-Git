import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap"

const NavBarComp = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Pictures</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>Reach us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>SignUp</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavBarComp