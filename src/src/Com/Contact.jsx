import { useState } from "react";
import { Card, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setForm({
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
    });
    navigate("/");
    alert("Submitted");
  };
  return (
    <>
      <Card.Title className="text-center p-5">Contact Us</Card.Title>
      <form className="container mt-3 mb-3" onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="name"
              name="firstName"
              value={form.firstName}
              className="form-control"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="name"
              name="lastName"
              value={form.lastName}
              className="form-control"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">+94</InputGroup.Text>
              <Form.Control
                aria-label="Mobile Number"
                type="mobile"
                aria-describedby="basic-addon1"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            controlId="formGridCheckbox"
            className="col col-sm-6    p-3"
          >
            <button
              type="submit"
              onClick={onSubmit}
              className="me-4 btn btn-success btn-lg btn-block  text-center   "
            >
              Submit
            </button>
          </Form.Group>
        </Row>
      </form>
    </>
  );
}

export default Contact;
