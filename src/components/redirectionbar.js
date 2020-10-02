import React from 'react';
import '../App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container } from 'react-bootstrap';

function RedirectionBar() {
  return (
       <div id="navbar wrapper">
       	<Navbar>
          <Container>
       		<Nav.Link href="./index.html" style={{ color: 'black' }} className="NavItem"> Home </Nav.Link>
       		<Nav.Link href="./NathanChongResume.pdf" style={{ color: 'black' }} className="NavItem"> Resume </Nav.Link> 
       		<Nav.Link href="./projects.html" style={{ color: 'black' }} className="NavItem"> Research/Projects </Nav.Link>
       		<Nav.Link href="./contactme.html" style={{ color: 'black' }} className="NavItem"> Contact </Nav.Link>
        </Container>
       	</Navbar>
       </div>
  )
}

export default RedirectionBar;