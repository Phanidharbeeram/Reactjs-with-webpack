import React from "react";
import { Card } from "react-bootstrap";
import "./SkillsCard.css";
function SkillCard(props) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "260px",
        margin: "10px"
      }}
    >
      <Card.Img variant="top" id="Cardimage" src={props.link} />
      <Card.Body>
        <Card.Title>
          <h3 id="name">{props.name}</h3>
        </Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
