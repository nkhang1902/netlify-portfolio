import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love programming and I have been working on my experience during my college years, also looking for a chance to kickstart my career.
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> building website, front-end focused but i'm also working on my back-end knowledge.</b>
              </i>
              <br />
              <br />
              Futhermore, my field of interest's are also including &nbsp;
              <i>
                <b className="purple">developing Video Games, IOT systems, AI toy projects...
                </b>
              </i>
              <br />
              <br />
              I'm looking forward to get better at my main field, learning new things, searching for opportunities to improve myself everyday.
              
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MY CONTACT</h1>
            <p>
              Email <span className="purple">nkhang1902@gmail.com </span>
            </p>
            <p>
              Phone Number <span className="purple">0975173018 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nkhang1902"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nh%E1%BA%A5t-khang-7a243828b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
