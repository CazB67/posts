import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getData } from "../../Redux/actions/index";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import store from "../../Redux/store";

  export function TitleList(props) {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [firstPost, setFirstPost] = useState(0);
    const [lastPost, setLastPost] = useState(10);
    

    useEffect(() => {
      props.getData()
      setFirstPost(0)
      setLastPost(10)
    },[])

    function handleClick(event) {
      event.preventDefault();
      setTitle(event.target.getAttribute("value").toUpperCase())
      setBody(event.target.getAttribute("body"))
    }

    function loadMore(event) {
      event.preventDefault();
      setFirstPost(firstPost + 10)
      setLastPost(lastPost + 10)
    }

      return ( 
        <>
        <Row>
        <Col md="4">
          <ListGroup>
          {props.posts.slice(firstPost,lastPost).map(el => (
            <ListGroup.Item onClick={handleClick} body={el.body} value={el.title} key={el.id}>{el.title.toUpperCase()}</ListGroup.Item>
          ))}
          </ListGroup>
        <div className="text-center mt-2">
          <Button onClick={loadMore} variant="dark" type="load" active>
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
      posts: state.posts
    };
  }

  export default connect(
    mapStateToProps,
    { getData }
  )(TitleList);
