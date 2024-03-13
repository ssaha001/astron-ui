import React from "react";
import { Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authServiceInstance from "../services/AuthService";

const HeaderNavOptions = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authServiceInstance.logout();
    navigate("/");
  };
  return authServiceInstance.isAuthenticated ? (
    <Nav>
      <Nav.Link as={Link} to="/myProfile">
        <Button variant="primary">MyProfile</Button>
      </Nav.Link>
      <Nav.Link>
        <Button variant="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Nav.Link>
    </Nav>
  ) : (
    <Nav>
      <Nav.Link as={Link} to="/signup">
        <Button variant="primary">Sign Up</Button>
      </Nav.Link>
      <Nav.Link as={Link} to="/signin">
        <Button variant="primary">Sign In</Button>
      </Nav.Link>
    </Nav>
  );
};

export default HeaderNavOptions;
