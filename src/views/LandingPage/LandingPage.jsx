import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import the Link component
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Welcome to Our Website!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              accumsan justo eget ligula aliquet, a dapibus mi condimentum.
            </p>
            <Row style={{ display: "flex", flexDirection: "row" }}>
              <Col>
                <Link to="/signup">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </Col>
              <Col>
                <Link to="/signin">
                  <Button variant="primary">Sign In</Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <img src="https://via.placeholder.com/400" alt="placeholder" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
