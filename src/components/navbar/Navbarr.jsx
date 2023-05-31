import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';



const Navbarr = () => {
  const navigate=useNavigate()
  //!burada Link yada Navlink ile yol alıp gidilen Home ve About sayfası olacak, ek olarak tıklandığında  github adresinize gidilen bir link te yazınız
  return (
    <Navbar className='' bg="warning" expand="lg" style={{height:"100px"}}>
    <Container>
      <Navbar.Brand  href="#home" className='fs-2' onClick={()=>navigate(`/`)} >COUNTRIES</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto my-lg-0">
          <NavLink className={"nav-link"} to="/"
            style={({isActive})=>({backgroundColor:isActive && "brown", borderRadius:isActive && "10px", color:isActive && "white" })}>
            Home</NavLink>
        
          <NavLink className={"nav-link"} to="/About"
          style={({isActive})=>({backgroundColor:isActive && "brown", borderRadius:isActive && "10px", color:isActive && "white" })}>About</NavLink>
          <a
              href="https://github.com/nihalptekin"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              
            >
              Github
            </a>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr