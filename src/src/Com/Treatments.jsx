import { Card, Col, Row } from "react-bootstrap";
import treatments from "./Stylists/treatments";

function Treatments() {
  return (
    <Row>
      {treatments.map((treatment) => (
        <Col sm={12} md={6} lg={4} xl={3} key={treatment._id}>
          <Card
            bg="Secondary"
            className="my-5 mx-3  "
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={treatment.img} />
            <Card.Title className="text-center" as="h3">
              {treatment.name}
            </Card.Title>
            <Card.Text className="text-center fs-4 Info">
              {treatment.description}
            </Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Treatments;
