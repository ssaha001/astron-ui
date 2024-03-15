import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./userAuthStyles.css";
import { signupUser } from "../../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../redux/store";
import { setUser } from "../../redux/slices/userSlice";
import authServiceInstance from "../../services/AuthService";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    type: "Developer/Contractor",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    signupUser(formData).then((res) => {
      setFormData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        type: "Developer/Contractor",
      });
      authServiceInstance.setToken(res["user"]["token"]);
      dispatch(setUser(res["user"]));
      console.log(res);
      navigate("/dashboard");
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2>Signup</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFname" className="formField">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLname" className="formField">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="formField">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="formField">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formType" className="formField">
              <Form.Label>User Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="Developer/Contractor">
                  Developer/Contractor
                </option>
                <option value="Option 1">Supplier</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
