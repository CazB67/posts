import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.PNG';
import axios from 'axios';

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
    axios.get('/logout', {withCredentials: true})
        .then((response) => {
            window.location.href = '/'
        }).catch((err) => {
            console.log(err);
        })
}
  return (
    <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  className="justify-content-end">
            <Nav >
              <Nav.Link style={{color:"white"}} href={"/"}>Settings</Nav.Link>
              <Nav.Link style={{color:"white"}} href={"/"}  onClick={logout}>Logout </Nav.Link> 
            </Nav>
          </Navbar.Collapse>
    </> 
  );
}