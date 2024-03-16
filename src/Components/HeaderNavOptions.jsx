import React from "react";
import { Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authServiceInstance from "../services/AuthService";
import { useDispatch } from "../redux/store";
import { resetemployee } from "../redux/slices/employeeSlice";
import { resetproject } from "../redux/slices/projectSlice";
import { resetuser } from "../redux/slices/userSlice";
const HeaderNavOptions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(resetemployee());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(resetproject());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(resetuser());
    authServiceInstance.logout();
    navigate("/");
  };
  return authServiceInstance.isUserAuthenticated() ? (
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
