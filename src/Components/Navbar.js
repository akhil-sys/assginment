import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import logo from './logo.svg'
export default function Navabar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
  <Container>
  <Navbar.Brand href="#home" style={{display:'flex'}}><img src={logo}/>
                <p style={{color:"#2947A9",fontSize:'30px',fontWeight:'700',marginLeft:'20px',width:'111px',height:'35px'}}><i>The</i>Box</p></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav  style={{ width: "80%",justifyContent:'right' }}>
      <Nav.Link href="#deets" style={{marginLeft:'10px', fontSize:'18px',color:'#14171F'}}>Home</Nav.Link>
      <Nav.Link href="#deets"style={{marginLeft:'30px',fontSize:'18px',color:'#14171F'}}>About Us</Nav.Link>
      <Nav.Link href="#deets" style={{marginLeft:'30px',fontSize:'18px',color:'#14171F'}}>Projects</Nav.Link>
      <Nav.Link href="#deets" style={{marginLeft:'30px',fontSize:'18px',color:'#14171F'}}>Services</Nav.Link>
      <Nav.Link href="#deets" style={{marginLeft:'30px',fontSize:'18px',color:'#F9995D'}}>Contact Us</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
