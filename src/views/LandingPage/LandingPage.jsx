import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import the Link component
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css"
function LandingPage() {
  return (
<div>
  <Container>
        <Row className="mt-5">
          <Col className="text-center">
            <h1 id="slogan">Stay on top of your building</h1>
            <h1 id="slogan">projects with us!</h1>
            <img src="https://live.staticflickr.com/65535/53588740710_3721fd3c5a_b.jpg" width="800" className="img-fluid" alt="A roof"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/dashboard" class="btn btn-lg btn-success mt-3">Go to Dashboard</Link>
     </Col>
     </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
