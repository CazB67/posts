import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../../Redux/actions/index";
import { ListGroup, Button } from 'react-bootstrap';
import { selectedPost } from "../../Redux/actions/index";

  export function TitleList(props) {

    useEffect(() => {
      props.getData()
    },[])

    function handleClick(event) {
      event.preventDefault();
      //alert(event.target.getAttribute("value"))
      let x = event.target.getAttribute("value")
      selectedPost( {selectedPost: x})
    }

      return (
        <>
        <ListGroup>
          {props.posts.map(el => (
            <ListGroup.Item onClick={handleClick} value={el.id} key={el.id}>{el.title.toUpperCase()}</ListGroup.Item>
          ))}
        </ListGroup>
        <div className="text-center mt-2">
        <Button variant="dark" type="load" active>
        LOAD MORE
        </Button>
        </div>
        </>
      );
    }
  
  
  function mapStateToProps(state) {
    return {
      posts: state.posts.slice(0, 10)
    };
  }

function mapDispatchToProps(dispatch) {
  return {
    selectedPost: postId => dispatch(selectedPost(postId))
  };
}



  // const List = connect(
  //   null,
  //   mapDispatchToProps
  // )(TitleList);
  
  export default connect(
    mapStateToProps,
   {getData}
  )(TitleList, mapDispatchToProps);
