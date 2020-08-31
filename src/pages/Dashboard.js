import React, { useState } from "react";
import { PostsNav, NavLinks } from "../components/Navbar";
import Footer from "../components/Footer";
import SettingsModal from "../components/Modal";
import TitleList from "../components/TitleList";
import { connect } from "react-redux";
import { validateName, chooseColor } from "../Redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
      validateName: name => dispatch(validateName(name)),
      chooseColor: color => dispatch(chooseColor(color))
    };
  }

function MainPage(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [themeColor, setThemeColor] = useState("grey")
  const [themeColorHolding, setThemeColorHolding] = useState("grey")

  function onChangeColor(event) {
    event.preventDefault()
    console.log(event.target.value);
    setThemeColorHolding(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    props.validateName( {name})
    setShow(false)
    setThemeColor(themeColorHolding)
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
      onChange={onChangeColor}
      />
      <PostsNav
        color={themeColor}>
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