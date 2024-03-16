import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Form,
} from "react-bootstrap";
import PropertyData from "../../Data/PropertyList.json";
import { DashboardHeader } from "../../Components";
import { useSelector } from "../../redux/store";
import PropertyModal from "./PropertyModal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Property = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    searchQuery: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { user, project } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [data,setData]=useState(project["data"]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const pattern = new RegExp(`.*${formData.searchQuery}.*`, 'i');
    const searchRes=project["data"].filter((prj)=>pattern.test(prj["name"]));
    setData(searchRes);
  }
  useEffect(()=>{
    setData(project["data"])
  },[project])
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Projects"} />
        </Container>
      </Navbar>
      <Row style={{ padding: "5% 0" }}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSearch">
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  name="searchQuery"
                  value={formData.searchQuery}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Col>
        <Col style={{ display: "flex" }}>
          <Button
            bg="light"
            onClick={() => {
              setShowModal(true);
            }}
            style={{ marginLeft: "auto" }}
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
      {data.map(
        (item, index) =>
          index % 3 === 0 && (
            <Row key={index} className="mb-3">
              {data.slice(index, index + 3).map((card, idx) => (
                <Col key={idx}>
                  <Card
                    onClick={() => {
                      navigate(`./property/:${card.id}`);
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text>{card.location}</Card.Text>
                      <Card.Text>Phase: {card.phase}</Card.Text>
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
