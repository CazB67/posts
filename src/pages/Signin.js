import React from "react";
import SigninForm from "../components/SigninForm";
import { PostsNav } from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from 'react-bootstrap'


function Signin() {
    return (
      <>
      <Container>
        <PostsNav/>
          <SigninForm/>
          <Footer/>
      </Container>
      </>
    );
  }

export default Signin;