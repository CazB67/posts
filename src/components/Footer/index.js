import React from "react";
import "./style.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { name: state.name };
};

const Footerpa = ({name}) => {
  return (
    
    <footer className="footer" bg="dark">
      <div className="text-center">
        <p className="p-2">
          {/* &copy; {new Date().getFullYear()} Copyright: Posts */}
          {name.name}
        </p>
      
      </div>
    </footer>
  );
}
const Footer = connect(mapStateToProps)(Footerpa);
export default Footer;