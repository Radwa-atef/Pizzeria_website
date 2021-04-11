import React from 'react';
import './navbar.scss';
import {Nav,Navbar, NavItem,FormControl,Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function NavbarComponent() {
    return(
        <div className="NavHeader">
        <Navbar expand="lg">
        <div className="brandName">
  <Navbar.Brand href="#home">
  <span style={{color:"white"}}>#<span style={{fontWeight: "bold",color:"white"}}>pizzeria.</span></span>
  </Navbar.Brand>
  </div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Menu</Nav.Link>
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Nav.Link href="#AboutUs">About Us</Nav.Link>
      <Nav.Link href="#Contacts">Contacts</Nav.Link>
      <Link to="/SignUp" className="signUp" style={{border:"2px solid #ffba00",borderRadius: "20px",padding: "6px 14px"}}>Sign Up</Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

  <div className="yelloBox" id="home"></div>
 <div className="headerContent">
     <span className="grand">GRAND</span><br/>
    <span>OPENING</span>
 </div>
 <div className="readMore">
<button className=" readMore">READ MORE</button>
 </div>
</div>
    );
  }
   
  export default NavbarComponent;