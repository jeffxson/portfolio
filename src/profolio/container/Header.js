import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
       
        <header>
        <Navbar bg="light"  varient ='dark' expand="lg" collapseOnSelect>
            <Container>
    <Navbar.Brand href="#home">My Protflio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home"><i className = "fas fa-home"></i> Home</Nav.Link>
        <Nav.Link href="#About"> <i className = "fas fa-user"></i> About</Nav.Link>
        <Nav.Link href="#Resume"><i className = "fas fa-book"></i>Resume</Nav.Link>
        <Nav.Link href="#Services"><i className = "fas fa-wrench"></i> Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</header>
   
    )
}

export default Header
