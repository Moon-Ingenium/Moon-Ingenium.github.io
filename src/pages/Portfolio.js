import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio(props) {
    return (
        <Wrapper>
            <Nav />
            <Container>
            <Row />
            <h1>Portfolio</h1>
            <Row />
            <Col size={"md"} number={6}>
                <h3>The Hunger Game</h3>
                <a href="https://s2hon.github.io/TheHungerGame/">
                    <img src="./assests/TheHungerGame.png" alt="Project2" className="img-thumbnail" />
                </a>
                </Col>
            <Row />
            <Col size={"md"} number={6}>
                <h3>Keep Austin Social</h3>
                <a href="https://enigmatic-brushlands-64346.herokuapp.com/">
                    <img src="./assests/KeepAustinSocial.png" alt="Project2" className="img-thumbnail" />
                </a>
                </Col>
            <Row />
            <Col size={"md"} number={6}>
                <h3>React Example</h3>
                <a href="https://moon-ingenium.github.io/Employee-Directory/">
                    <img src="./assests/EmployeeDirectory.png" alt="REACTapp" className="img-thumbnail" />
                </a>
                </Col>
            </Container>
        </Wrapper>
    )
}

export default Portfolio;