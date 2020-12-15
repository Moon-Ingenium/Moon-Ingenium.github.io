import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Nav from "../components/Nav";
import Col from "../components/Col";
import Footer from "../components/Footer";
import Langauage from "../components/LangauageNav";

function Home(props) {
    return (
        <Wrapper>
            <Nav />
            <Container >
                <Row>
                    <Col size="lg" number="12">
                        <h1>Michelle Moon</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg" number="12">
                        <p className="job-text">Front End Software Engineer</p>
                    </Col>
                </Row>
                <Langauage />
            </Container>
            <Footer />
        </Wrapper>
    )
}
export default Home;