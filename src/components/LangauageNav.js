import React from "react";
import "./components.css";
import Col from "./Col"
import Row from "./Row"

function Langauage(props) {
    return (
        <>
                <Row>
                    <h5 style={{ writingMode: "vertical-rl" }} className="develop text-justify">Web Development Skills</h5>
                    <Col size="sm" number= "3">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>Materialize</p>
                    <p>Javascript</p>
                    </Col>
                    <Col size="sm" number= "3">
                    <p>jQuery</p>
                    <p>React</p>
                    <p>Reactstrap</p>
                    <p>Bootstrap</p>
                    <p>React</p>
                    </Col>
                    <Col size="sm" number= "3">
                    <p >JSX</p>
                    <p>Node.js</p>
                    <p >Express.js</p>
                    <p>REST APIs</p>
                    </Col>
                    </Row>
        </>
    )
}
export default Langauage;