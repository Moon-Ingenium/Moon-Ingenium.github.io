import React from "react";
import "./components.css";

function Col(props) {
  return <div className={`col-${props.size}-${props.number}`}>{props.children}</div>;
}

export default Col;