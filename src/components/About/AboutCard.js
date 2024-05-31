import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Hoang Truong Minh </span>
            from <span className="purple"> Ho Chi Minh, Viet Nam.</span>
            <br />
            I am currently working as a Intern software engineer at FPT Software.
            <br />
            I a studying in Software Engineering at FPT University.
            <br />
            <br />
            Besides my work, I have a few passions that I enjoy pursuing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Science Fiction
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking Exotic Dishes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation distinguishes between a leader and a follower."{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
