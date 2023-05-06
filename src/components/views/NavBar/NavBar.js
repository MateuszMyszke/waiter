import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark"  className="mt-4 mb-4 rounded justify-content-between p-2">
      <Container>
        <Navbar.Brand href="#home">waiter.app</Navbar.Brand>
        <Nav className="flex-sm-column flex-md-row">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;