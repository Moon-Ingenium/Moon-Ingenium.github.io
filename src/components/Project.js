import React from "react";
import Col from "../components/Col";
import "./components.css";

function Project(props) {

    return (
        <Col size={"md"} number={6}>
            <h3>{props.title}</h3>
            <a href={props.href}>
                <img src={props.src} alt={props.alt} className="img-thumbnail" />
            </a>
        </Col>
    )
}

export default Project;