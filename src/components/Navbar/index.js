import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.PNG';
import store from "../../Redux/store";
import { validateName } from "../../Redux/actions";

export function PostsNav(props) {
  
  return (
    <>
       <Navbar bg="navStyle" expand="lg" className="navBar">
        <Navbar.Brand>
          <img
          src={logo}
          alt="Posts Logo"
          />
        </Navbar.Brand>
        {props.children}
      </Navbar>
    </> 
  );
}

export function NavLinks(props) {
  const logout = () => {
    store.dispatch( validateName({ name: "" }) );
    window.location.href = '/'
}
  return (
    <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  className="justify-content-end">
            <Nav >
              <Nav.Link style={{color:"white"}} onClick={props.onClick}>Settings</Nav.Link>
              <Nav.Link style={{color:"white"}} onClick={logout}>Logout </Nav.Link> 
            </Nav>
          </Navbar.Collapse>
    </> 
  );
}