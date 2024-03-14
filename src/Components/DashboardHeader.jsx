import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";

const DashboardHeader = ({ current }) => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            className={current === "Dashboard" ? "active-link" : ""}
            to="/dashboard"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Projects" ? "active-link" : ""}
            to="/projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Get Products" ? "active-link" : ""}
            to="/getProducts"
          >
            Get Products
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Financing" ? "active-link" : ""}
            to="/financing"
          >
            Financing
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Scheduling" ? "active-link" : ""}
            to="/scheduling"
          >
            Scheduling
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default DashboardHeader;
