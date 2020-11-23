import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Nav from "../components/Nav";

function About() {
    return (
        <div>
            <Nav />
            <Container>
                <h1>About Me</h1>
                <img src="./assests/MoonWedding.jpg"
                    className="img-fluid" alt="Couple getting married by Elvis" />
                <Row>
                    <div className="col" size="md-12">

                        <p> In 2007 at the tender age of 17, I decided traditional college just wasn't for me. It happened to be at a very "I need a job  now" point in my life, but I've always believed in the age old saying " Do what you love and you'll never work a day in your life." So, I began my trade school journey into becoming a licensed esthitician. If you're unfamilar, estheticians primarily work in the spa industry actively manipulating the skin.  The program lasted 750 hours, followed by a written and practical test, and every two years continuing education is mandatory to stay relavent and up to date. It wasn't too far off from the pace and concept of the UT Bootcamp.
                        After thirteen years of constant change, growth, and leadership training, I reached a point of plateau. What was next?  My physcial body started having a difficult time keeping up with my ambition, but what of my mind? I knew the logic of the world and I was already thinking in decimals and dollars, why not explore that?
                    </p>
                        <p>In 2020, COVID19 took a toll on the entire country and those of us in service industry took an enormous huge hit. A place of relaxing and pampering no longer felt safe. People turned to the internet. The technology industry boomed even further. People used apps to connect, webites to shop, etc. This is when I found my new place. </p>
                        <p>I took this boom as a new service of sorts. One that my mind could provide to connect people together. I found a new passion full of opportunity
        and growth. Software development is always challenging and growing. I look forward to continuously applying my drive and ambition to that challenge. </p>

                    </div>
                </Row>
            </Container>
        </div >
    );
}

export default About;