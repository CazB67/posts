import React from "react";
import "../../App.css";

export default function Footer(props) {
  return (
    
    <footer className={props.color} style={{position: "fixed", color:"white", height:"50px", textAlign:"center", bottom:"0px", left:"0px", right:"0px", marginBottom:"0px"}} >
      <div className="text-center">
        
        <p className="p-2">
          &copy; {new Date().getFullYear()} Copyright: Posts {typeof(props.name) !== "undefined" ? "for " + props.name : "" }
        </p>
      </div>
    </footer>
  );
}
