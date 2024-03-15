import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import the Link component
import "bootstrap/dist/css/bootstrap.min.css";
function LandingPage() {
  return (
<div>
  <Container>
        <Row className="mt-5">
          <Col className="text-center">
            <h1>Stay on top of your building</h1>
            <h1>projects with us!</h1>
            <img src="https://live.staticflickr.com/65535/53588740710_3721fd3c5a_b.jpg" width="500" className="img-fluid" alt="A roof"/>
            <br/>
            <Link to="/dashboard" class="btn btn-lg btn-success mt-3">Go to Dashboard</Link>
     </Col>
     </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
