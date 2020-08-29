import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';

export default function SigninForm(props) {

    const onSubmit = async (event) => {
        event.preventDefault();
        alert("hi");
        }

        const handleChange = async (event) => {
            const type = event.target.name;
            alert(type);
        }

        return (
            <>
            

            <Row className="text-center mb-3">
      <Col>
        <h1 className="text-center mt-5">Sign in</h1>
        </Col>
        </Row>
        <Form onSubmit={onSubmit} className="p-4" style={{backgroundColor: "#DCDCDC", marginLeft: "30pt", marginRight:"30pt"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="errorMessage">Name</Form.Label>
            <Form.Control name="name" style={{fontFamily: 'Red Rose'}}  onChange={handleChange} className="timer" type="email" placeholder="Enter name"/>
            <Form.Text className="text-muted">
              Must be 4 or more characters long.
            </Form.Text>
          </Form.Group>
          <Button onClick={onSubmit} variant="dark" type="submit" active>
            SUBMIT
        </Button>
        </Form>
           
                    
            
                
            </> 
        );
        }

