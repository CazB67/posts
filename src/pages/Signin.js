import React from "react";
import SigninForm from "../components/SigninForm";
import { PostsNav } from "../components/Navbar";
import Footer from "../components/Footer";


function Signin() {
    return (
      <>
      <PostsNav/>
      <SigninForm/>
      <Footer/>
      </>
    );
  }

export default Signin;