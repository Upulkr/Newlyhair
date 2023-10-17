import { Card, Col, Row } from "react-bootstrap";
import blogs from "./Stylists/blog.js";

function Blog() {
  return (
    <>
      {" "}
      <Row className="m-4">
        {blogs.map((blog) => (
          <Col className="p-1" sm={12} md={6} lg={4} xl={3}>
            <Card.Title className="text-center">{blog.name}</Card.Title>
            <Card.Img className="p-1" src={blog.img} />
            <Card.Text className="p-1 text-justify">
              {blog.description}
            </Card.Text>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Blog;
