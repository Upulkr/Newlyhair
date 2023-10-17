import { Card, Image } from "react-bootstrap";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import "./New.css";
import Treatments from "./Treatments";
import SocialMedia from "./SocialMedia";
function Home() {
  return (
    <div className="card text-bg-secondary mb-3">
      <Card.Text className="text-center fs-4">
        <MDBCard className="text-center fs-4">
          <MDBCardBody className="card text-bg-secondary mb-3">
            <h1 className="font-link p-4 card text-bg-secondary mb-3">
              Saloon Noya in Colombo,
            </h1>

            <h2>
              Hair Therapy Salon with is a full-service salon and boutique,
              specializing in hair color, cuts, extensions and treatments
            </h2>
          </MDBCardBody>
        </MDBCard>
      </Card.Text>

      <Image width={10000} className="img-fluid " src="./img/Q.jpg" />
      <div className="p-4">
        {" "}
        <Treatments />
      </div>
      <SocialMedia />
    </div>
  );
}

export default Home;
