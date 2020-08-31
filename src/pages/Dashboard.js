import React, { useState } from "react";
import { PostsNav, NavLinks } from "../components/Navbar";
import Footer from "../components/Footer";
import SettingsModal from "../components/Modal";
import TitleList from "../components/TitleList";
import { connect } from "react-redux";
import { validateName } from "../Redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
      validateName: name => dispatch(validateName(name))
    };
  }

function MainPage(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    props.validateName( {name})
    setShow(false)
  }

  const handleChange = async (event) => {
    event.preventDefault()
    const  {value}  = event.target;
    setName(value) 
  }
  const handleClose = () => setShow(false);

  function handleModal(event) {
    event.preventDefault();
    setShow(true);
  }
    return (
      <>
      <SettingsModal
      show={show}
      handleClose={handleClose}
      onClick={handleClose}
      onSubmit={onSubmit}
      handleChange={handleChange}
      />
      <PostsNav>
        <NavLinks
          onClick={handleModal}/>
      </PostsNav>
      <TitleList/>
      
      <Footer/>
      </>
    );
  }

  const Dashboard = connect(
    null,
    mapDispatchToProps
  )(MainPage);
  
  export default Dashboard;