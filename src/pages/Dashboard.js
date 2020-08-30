import React, { useState } from "react";
import { PostsNav, NavLinks } from "../components/Navbar";
import Footer from "../components/Footer";
import SettingsModal from "../components/Modal";
import TitleList from "../components/TitleList";

function Dashboard() {
  const [show, setShow] = useState(false);

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

export default Dashboard;