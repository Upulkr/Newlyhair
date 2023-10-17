import { Card, Col, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <div>
      <Row>
        <Col>
          <Card.Title className="text-center p-3">About us</Card.Title>
          <Card.Title className="text-center p-1">
            HAIR THERAPY VISION
          </Card.Title>
          <Row>
            <Card.Text className=" w-50 fs-4 p-1 text-justify ">
              <p>
                Almost any barbershop can give you a great haircut. It’s the
                great customer service and professionalism together with a great
                haircut that makes Hair Therapy a cut above. At Hair Therapy,
                expect a greeting not a grunt from our staff when you walk
                through the door. Enjoy a cold drink on us. Expect
                professionally-dressed barbers ready to tend to your needs.
                Don’t worry about dodging dog-sized piles of hair in our neatly
                kept shop. Don’t worry about having to shield your children’s
                ears from an explosion of curse words. Expect to be treated like
                family in a barbershop that caters to a diverse clientele. And
                expect to spring out of our state-of-the-art reclining barber
                chairs with a fresh fade, shave, pompadour or other trendy
                hairstyle at decent, affordable prices. We’re sure, once you try
                Hair Therapy, you too will agree: The way we treat our clients
                and their hair like family is a cut above.
              </p>
            </Card.Text>

            <Card.Img className="w-50 " fluid src="./img/aboutus/j.jpg" />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
