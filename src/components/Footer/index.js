import React from "react";
import "./style.css";

const Footer = (props) => {
  return (
    
    <footer className="footer" bg="dark">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Copyright: Posts
        </p>
      
      </div>
    </footer>
  );
}

export default Footer;