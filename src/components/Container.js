import React from "react";
import "./components.css";

function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;