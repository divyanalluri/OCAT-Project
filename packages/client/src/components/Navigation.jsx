import { Container, Nav, Navbar } from 'react-bootstrap';
import Cookies from 'js-cookie';

export const Navigation = () =>
  <header>
    <Navbar expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">OCAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/assessment/new">New Assessment</Nav.Link>
            <Nav.Link href="/assessment/list">Assessment List</Nav.Link>
            {!Cookies.get(`isLoggedIn`) ?
              <Nav.Link className="login" href="/user/login">
                Login
              </Nav.Link> :
              <Nav.Link className="login" href="/user/logout">
                Logout
              </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>;
