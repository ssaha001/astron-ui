import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addProject } from "../../api/projectApi";
import { useDispatch } from "../../redux/store";
import { fetchAllProperty } from "../../redux/slices/projectSlice";

const PropertyModal = ({ show, handleClose, userId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    location: "",
    name: "",
    phase: "Pre-Design",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send formData to server
    addProject(formData, userId).then((data) => {
      dispatch(fetchAllProperty(userId));
    });
    handleClose();
  };

  const phase = [
    "Pre-Design",
    "Design",
    "Permitting",
    "Pre-Construction",
    "Construction",
    "Post-Construction",
    "Completed",
  ];
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhase">
            <Form.Label>Phase</Form.Label>
            <Form.Select
              name="phase"
              value={formData.phase}
              onChange={handleChange}
            >
              {phase.map((phase) => (
                <option value={phase}>{phase}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PropertyModal;
