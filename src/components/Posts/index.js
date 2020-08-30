import React, { useEffect } from "react";
//import { connect } from "react-redux";
//import { getData } from "../../Redux/actions/index";
import store from "../../Redux/store";
//import "./style.css";

  export default function Post(props) {

    useEffect(() => {
      store.subscribe(() => {
        console.log("store.getState()");
        
        
      });
    },[])

      return (
        <h1>Title</h1>
      );
    }
  

