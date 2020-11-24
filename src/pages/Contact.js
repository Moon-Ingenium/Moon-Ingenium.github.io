import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";
import "../components/components.css";

function Contact(props) {
    return (
        <Wrapper>
            <Nav />
            <Container >
                <Row>
                    <Col size={"md"} number={8}>
                        <Card />
                    </Col>
                </Row>
            </Container >
        </Wrapper>

    )
}

export default Contact;