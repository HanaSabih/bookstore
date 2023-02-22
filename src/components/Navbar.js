// import { Outlet, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navbars = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className="text-primary fw-bolder fs-3">Bookstore CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  flex-grow-1 pe-3">
            <Nav.Link href="/">BOOKS</Nav.Link>
            <Nav.Link href="/Categories">CATEGORIES</Nav.Link>
          </Nav>
          <Button variant=" justify-content-end btn btn-outline-secondary rounded-circle">👤</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
  </>
);

export default Navbars;

// import { Outlet } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Navs = () => (
//   <>
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Bookstore CMS</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">BOOKS</Nav.Link>
//             <Nav.Link href="#link">CATEGORIES</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">Math magicians</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/Calculator">Calculator</Nav.Link>
//             <Nav.Link href="/Quote">Quote</Nav.Link>
//           </Nav>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <Outlet />
//   </>
// );

// export default Navs;
