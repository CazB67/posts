import React from "react";
import "./style.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { namex: state.name };
};

const FooterName = ({namex}) => {
  return (
    
    <footer className="footer" bg="dark">
      <div className="text-center">
  
        <p className="p-2">
          &copy; {new Date().getFullYear()} Copyright: Posts {typeof(namex.name) !== "undefined" ? "for " + namex.name : "" }
        </p>
      </div>
    </footer>
  );
}
const Footer = connect(mapStateToProps)(FooterName);
export default Footer;