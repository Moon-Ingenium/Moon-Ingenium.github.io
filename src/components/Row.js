import React from "react";
import "./components.css";

function Row(props) {
  return <div className="row">{props.children}</div>;
}

export default Row;