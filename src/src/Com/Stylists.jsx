import { Card, Col, Row } from "react-bootstrap";
import stylists from "./Stylists/stylists.js";

function Stylists() {
  return (
    <>
      <p className="text-center fs-2">Our Talented Stylists </p>
      <Row>
        {stylists.map((stylist) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card.Title className="text-center">{stylist.name}</Card.Title>
            <Card.Img src={stylist.img} />
            <Card.Text className="text-center fs-4">
              {stylist.description}
            </Card.Text>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Stylists;
