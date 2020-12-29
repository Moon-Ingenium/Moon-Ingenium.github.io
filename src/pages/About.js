import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Nav from "../components/Nav";
import Col from "../components/Col";
import Footer from "../components/Footer";

function About() {
    return (
        <Wrapper>
            <Nav />
            <Container>
                <h1>About Me</h1>
                <img src="./assests/MoonWedding.jpg"
                    className="img-fluid" alt="Couple getting married by Elvis" />
                <Row>
                    <Col size={"md"} number={12}>
                        <section>
                            When I was in middle school there was a big demand for engineers and UT Arlington was hosting a program for the youth to get excited about the field. My teacher at the time encouraged me to join the program and somehow persuaded a 14 year old girl to spend a summer learning C++, Logic, advanced Math, and Engineering. I excelled in Logic and C++, but besides creating Xanga and Myspace layouts with CSS in my freetime, I didn’t think much on it until 2015 when my partner took a Coding Bootcamp with Makersquare. He knew right away that I would excel in this field, just as my teacher at the time saw it in me. That stuck with me, because of how odd it was for a teenager to go to school, for fun, in the summer and truly look back and enjoy it. At the time, I was very happy in my career in esthetics. 
                            As an extrovert, I truly enjoy people, being challenged in the difficult communication tactics, and teaching (at the time I was an Assistant Manager drinking the kool aid). 
                            Eventually in the service industry as one does, I reached a plateau and I kept seeking a challenge. Then, Covid19 decimated my industry. The time was now to take a new path, but what? After thirteen years in a field you love, choosing a new career is a challenge to say the least, but I couldn’t let go of that Logic class from the back of mind. What sane teenager spends her summer at college learning these things for fun? The answer was simple, a web developer.
                        </section>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Wrapper>
    );
}

export default About;