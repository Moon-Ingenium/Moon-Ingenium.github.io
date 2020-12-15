import React from "react";
import Col from "../components/Col";
import "./components.css";

function Project(props) {

    return (
        <Col size={"md"} number={6}>
            <a href={props.link} style={{color:"black"}} target={"_blank"} rel="noreferrer">
                <h3>{props.title}</h3>
            </a>
            <a href={props.href} target={"_blank"} rel="noreferrer">
                <img src={props.src} alt={props.alt} className="img-thumbnail" />
            </a>
        </Col>
    )
}

export default Project;