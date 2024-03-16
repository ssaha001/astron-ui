import React from "react";
import { Card, Container, Row, Col, Navbar } from "react-bootstrap";
import PropertyData from "../../Data/PropertyList.json";
import { DashboardHeader } from "../../Components";

const Property = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Projects"} />
        </Container>
      </Navbar>
      {PropertyData.map(
        (item, index) =>
          index % 3 === 0 && (
            <Row key={index} className="mb-3">
              {PropertyData.slice(index, index + 3).map((card, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text>{card.location}</Card.Text>
                      <Card.Text>Category: {card.category}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )
      )}
    </Container>
  );
};

export default Property;
