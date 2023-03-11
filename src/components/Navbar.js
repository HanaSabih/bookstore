import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navbars = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className=" border-bottom  ">
      <Container>
        <Navbar.Brand href="/" className="text-primary fw-bolder fs-3">Bookstore CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  flex-grow-1 pe-3">
            <Nav.Link href="/">BOOKS</Nav.Link>
            <Nav.Link href="/Categories">CATEGORIES</Nav.Link>
          </Nav>
          <Button variant=" justify-content-end btn btn-outline-secondary rounded-circle px-2 py-1 me-1 text-primary">
            <i className="fas fa-user" />
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
  </>
);

export default Navbars;
