import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import store from "../../Redux/store";
import { validateName } from "../../Redux/actions";

export default function NavLinks(props) {
    const logout = () => {
      store.dispatch( validateName({ name: "" }) );
      window.location.href = '/'
  }
    return (
      <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  className="justify-content-end">
              <Nav >
                <Nav.Link style={{color:"black"}} onClick={props.onClick}>Settings</Nav.Link>
                <Nav.Link style={{color:"white"}} onClick={logout}>Logout </Nav.Link> 
              </Nav>
            </Navbar.Collapse>
      </> 
    );
  }