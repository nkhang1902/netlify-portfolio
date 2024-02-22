import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vu Nhat Khang </span>
            from <span className="purple"> HCM City, VietNam.</span>
            <br />
            I am currently a senior at<span className="purple">HCM University of Science.</span>
            <br />
            I have been pursuing the<span className="purple"> Information Technology Bachelor's</span> and looking for an internship to kickstart my career.
            <br />
            <br />
            Apart from coding, some other things that i love like movie, making music, playing video games,...
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
