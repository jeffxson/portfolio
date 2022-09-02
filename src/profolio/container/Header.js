import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
       
        <header>
        <Navbar bg="light"  varient ='dark' expand="lg" collapseOnSelect>
            <Container>
    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/"><i className = "fas fa-home"></i> Home</Nav.Link>
        <Nav.Link href="/about"> <i className = "fas fa-user"></i> About</Nav.Link>
        <Nav.Link href="/resume"><i className = "fas fa-book"></i>Resume</Nav.Link>
        <Nav.Link href="/contact"><i className = "fas fa-phone"></i> Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</header>
    
    )
}

export default Header
