import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav1() {
  return (
<div>
<>
      <Navbar bg="dark" variant="dark">
        <Container>
           <Navbar.Brand href="../Navbar/Nav1.js">Navbar</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link href="../Home/Home.js">Home</Nav.Link>
            <Nav.Link href="../Register/Register.js">Register</Nav.Link>
            <Nav.Link href="../Login/Login.js">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
        </>
</div>
  )
}

export default Nav1