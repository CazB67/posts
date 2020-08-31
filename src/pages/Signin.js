import React, { useState } from "react";
import SigninForm from "../components/SigninForm";
import { PostsNav } from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from 'react-bootstrap'

function Signin() {
  const [themeColor, setThemeColor] = useState("grey")

    return (
      <>
      <Container>
        <PostsNav
          color={themeColor}/>
          <SigninForm/>
          <Footer/>
      </Container>
      </>
    );
  }

export default Signin;