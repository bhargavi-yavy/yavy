import logo from '../../img/yavi-logo.png';
import { Link } from "react-router-dom";
import React from 'react';
import {Nav,NavDropdown,Navbar,Container} from "react-bootstrap";

export default function Header() {
  return (
    <header className="navbar"> 
  
              <div className="logo">  
            <img className="img-logo" src={logo} alt="" /></div>
           
       <Link className="Menu-One" to="/">Home</Link>
       <Link className="Menu-One" to="/ourwork">Our Work</Link>
      <NavDropdown title="Services" className="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Budget Logo Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Logo Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Icon Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Healthcare Branding</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Restaurant Branding</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Real Estate Branding</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Infographic Design</NavDropdown.Item>
      </NavDropdown>
      <Link className="Menu-One" to="/about">About</Link>
      <Link className="Menu-One" to="/contact">Contact</Link>
        </header>      
  );
}