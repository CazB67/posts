import React, { useState, useEffect } from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import { connect } from "react-redux";
import { validateName } from "../../Redux/actions/index";
import { useHistory } from "react-router-dom";
import store from "../../Redux/store";

function mapDispatchToProps(dispatch) {
  return {
    validateName: name => dispatch(validateName(name))
  };
}

function ConnectedForm(props) {
  const history = useHistory();
  const [name, setName] = useState("");

  useEffect(() => {
    store.subscribe(() => {
      if(store.getState().name !== "") {
        history.push("/dashboard");
      }
      
    });
  })

  const onSubmit = async (event) => {
    event.preventDefault();
    props.validateName( {name})
    
  }

  const handleChange = async (event) => {
    event.preventDefault()
    const  {value}  = event.target;
    setName(value) 
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
        <Form.Control name="name" onChange={handleChange} className="timer" type="name" placeholder="Enter name"/>
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

const SigninForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default SigninForm;