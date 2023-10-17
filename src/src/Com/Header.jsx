import { Image, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="blue" variant="white">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto sticky-top">
              <a href="./">
                <Image width={100} height={90} src="./img/logo.jpg" />
              </a>
              <Navbar className="bg-body-tertiary"></Navbar>

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>

              <Nav.Link href="/treatments">Treatments</Nav.Link>
              <Nav.Link href="/aboutUS">About Us</Nav.Link>
              <Nav.Link href="/stylists">Stylists</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
