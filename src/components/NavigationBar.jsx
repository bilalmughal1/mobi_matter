import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import jsonFile from "../products.json";

function NavigationBar() {
  let countries = new Set();
  let operator = new Set();
  jsonFile.result.forEach((value) => {
    operator.add(value.providerName);
    value.countries.forEach((item) => {
      countries.add(item);
    });
  });
  countries = Array.from(countries);
  operator = Array.from(operator);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Mobimatter</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="countries">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Countries" id="basic-nav-dropdown">
              {countries.map((e, k) => {
                return (
                  <NavDropdown.Item href="#action/3.1">{e}</NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="Operator" id="basic-nav-dropdown">
              {operator.map((e, k) => {
                return (
                  <NavDropdown.Item href="#action/3.1">{e}</NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
