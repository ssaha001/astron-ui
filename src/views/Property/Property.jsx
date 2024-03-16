import React, { useState } from "react";
import { Card, Container, Row, Col, Navbar, Button, Form } from "react-bootstrap";
import PropertyData from "../../Data/PropertyList.json";
import { DashboardHeader } from "../../Components";
import { useSelector } from "../../redux/store";
import PropertyModal from "./PropertyModal";
import { useNavigate } from "react-router-dom";

const Property = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    searchQuery: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const { user, project } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Projects"} />
        </Container>
      </Navbar>
      <Row style={{padding:'5% 0'}}>
        <Col>
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control
                type="text"
                placeholder="Search..."
                name="searchQuery"
                value={formData.searchQuery}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col style={{display:'flex'}}>
          <Button
            bg="light"
            onClick={() => {
              setShowModal(true);
            }}
            style={{marginLeft:'auto'}}
          >
            Add a Project
          </Button>
        </Col>
      </Row>
      <PropertyModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        userId={user.id}
      />
      {project["data"].map(
        (item, index) =>
          index % 3 === 0 && (
            <Row key={index} className="mb-3">
              {project["data"].slice(index, index + 3).map((card, idx) => (
                <Col key={idx}>
                  <Card onClick={()=>{
                    navigate(`./property/:${card.id}`)
                  }}>
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
