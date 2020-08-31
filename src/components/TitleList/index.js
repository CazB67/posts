import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getData } from "../../Redux/actions/index";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import store from "../../Redux/store";

  export function TitleList(props) {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [localPosts, setLocalPosts] = useState([]);
    const [postOffset, setPostOffset] = useState(0);
    const [finishedLoading, setFinishedLoading] =useState(false);

    // useEffect(() => {
    //   setLocalPosts(props.posts.slice(0,10))
    // },[finishedLoading])

    useEffect(() => {
      props.getData()
      store.subscribe(() => {
        console.log("store.getState()");
      });

    },[])

    
    function handleClick(event) {
      event.preventDefault();
      setTitle(event.target.getAttribute("value").toUpperCase())
      setBody(event.target.getAttribute("body"))
      console.log(props.posts)
    }

      return (
        <>
        <Row>
        <Col md="4">
          <ListGroup>
          {props.posts.map(el => (
            <ListGroup.Item onClick={handleClick} body={el.body} value={el.title} key={el.id}>{el.title.toUpperCase()}</ListGroup.Item>
          ))}
          </ListGroup>
        <div className="text-center mt-2">
          <Button variant="dark" type="load" active>
          LOAD MORE
          </Button>
        </div>
        </Col>
        <Col md="8">
          <h1>{title}</h1>
          <p className="mt-3">{body}</p>
        </Col>
        </Row>
        
        
        </>
      );
    }
  
  function mapStateToProps(state) {
    return {
      posts: state.posts.slice(0,10)
    };
  }

  export default connect(
    mapStateToProps,
    { getData }
  )(TitleList);
