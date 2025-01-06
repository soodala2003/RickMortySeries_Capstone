import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary"> {/* bg="primary" data-bs-theme="dark"> */}
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Episodes" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/api/season1">Season 1</NavDropdown.Item>
                <NavDropdown.Item href="/api/season2">Season 2</NavDropdown.Item>
                <NavDropdown.Item href="/api/season3">Season 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Season 4</NavDropdown.Item>
                <NavDropdown.Item href="#">Season 5</NavDropdown.Item>
                <NavDropdown.Item href="#">Season 6</NavDropdown.Item>
                <NavDropdown.Item href="#">Season 7</NavDropdown.Item>
              </NavDropdown>
              
              {/* <Nav.Link href="/api/season1">Episodes</Nav.Link>
              <Nav.Link href="#episode">Episodes</Nav.Link>
              <Nav.Link href="#character">Characters</Nav.Link> */} 
              <NavDropdown title="Reviews" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/api/season1/episodes/reviews">Season 1</NavDropdown.Item>
                <NavDropdown.Item href="/api/season2/episodes/reviews">Season 2</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;