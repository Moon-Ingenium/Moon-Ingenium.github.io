import React from "react";
import "./components.css";


var style = {
  backgroundColor: "white",
  borderTop: "none",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  fontWeight: "bold",
  color: "black",
  textShadow: "1px 1px green"
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}
function Footer() {
  return (
    <footer className="footer">
      <div style={phantom} />
      <span style={style}><i class="fa fa-copyright"></i>Moon-Ingenium 2020</span>
    </footer>
  );
}


export default Footer;