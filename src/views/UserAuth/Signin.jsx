import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import authServiceInstance from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import "./userAuthStyles.css";
import { signinUser } from "../../api";
import { useDispatch, useSelector } from "../../redux/store";
import { setUser } from "../../redux/slices/userSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser({ email: email, password: password })
      .then((data) => {
        authServiceInstance.setToken(data["user"]["token"]);
        dispatch(setUser(data["user"]));
        console.log("This is user", user);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2>Signin</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="formField">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="formField">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
