import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector } from '../../redux/store';
import { postRequirement } from '../../api/userApi';

const AddRequirementModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({name:'',quantity:0,unit:'kg'});
 const {user}= useSelector((state)=>state)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    postRequirement({...formData, id:user.id}).then((data)=>{
        console.log(data)
    })
    onHide(); // Close the modal after form submission
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Requirement Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Material Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formUnit">
            <Form.Label>Unit</Form.Label>
            <Form.Control
              as="select"
              name="unit"
              onChange={handleInputChange}
              required
            >
              <option value="kg">kg</option>
              <option value="number">number</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddRequirementModal;
