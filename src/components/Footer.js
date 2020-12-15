import React from "react";
import "./components.css";

var style = {
  backgroundColor: "#f6f7e9",
  border: "none",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%",
  fontWeight: "bold",
  color: "black",
  textShadow: "1px 1px #1a936f"
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
      <span style={style}>
        <a href="tel:+8175641592" style={{ color: "black" }}><svg style={{ color: "black" }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
        </svg>
        </a>
        <i style={{ padding: "10px" }} className="fa fa-copyright">
        </i>Moon-Ingenium 2020<a style={{ padding: "10px" }} label="Email" value="Email" href="mailto:robbins.michelle@ymail.com" rel="noopener noreferer" className="fa fa-envelope">
        </a>
      </span>

    </footer>
  );
}


export default Footer;