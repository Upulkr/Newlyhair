import { Card, Col, Image, Nav, Row } from "react-bootstrap";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  const twitter = <SocialIcon url="https://twitter.com" />;
  const facebook = <SocialIcon url="https://facebook.com" />;
  const insta = <SocialIcon url="https://instagram.com" />;
  const youtube = <SocialIcon url="https://youtube.com" />;
  return (
    <Card className="text-center">
      <Card.Header>
        <h1>Call Us</h1>{" "}
      </Card.Header>
      <h2>0112-2345234</h2>
      <Card.Body>
        <Card.Title>to shedule your hair treatments</Card.Title>
        <Card.Text className="font-link p-4 ">
          <h2>We care your hair.........</h2>
        </Card.Text>
        {twitter}
        {facebook}
        {insta}
        {youtube}
      </Card.Body>
      <Card.Footer className="text-muted">
        All-Rights recieved 2010-2023
      </Card.Footer>
    </Card>
  );
}
export default SocialMedia;
