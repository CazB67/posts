import React from "react";
import { Modal, Button, Form } from 'react-bootstrap'
//import "./style.css";

export default function SettingsModal(props) {
    
    return (
          <>
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Color</Form.Label>
                    <Form.Control as="select">
                    <option>Dark Slate Grey</option>
                    <option>Midnight Blue</option>
                    <option>Indigo</option>
                    <option>Orange</option>
                    <option>Medium Violet Red</option>
                    <option>Black</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="dark" onClick={props.onClick}>Cancel</Button>
                <Button variant="dark">Submit</Button>
            </Modal.Footer>
         </Modal>
          </>
    );
  }