import React from 'react';
import './App.css';
//import Contact from './Contact';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
//import Navbar from './component/Navbar'
function App() {

  return (
<Router>
    <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="sm"  className="nav-container">
    <ReactBootStrap.Navbar.Brand href="#home" className='home'> Covrutt</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/Contact" className="feature">Contacts</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#pricing">Notification</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Cases" id="collasible-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Sample test</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Confirmed Cases</ReactBootStrap.NavDropdown.Item>
          
          
          
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar> 
  
     <h1 >Stay Home,Stay Safe!!!</h1>
     <h2 className='head'>We can fight with this pandemic by maintaining social distancing.</h2> 
    </div>
</Router>
  );
}

export default App;
