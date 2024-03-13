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
            to="/dashboard/home"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Projects" ? "active-link" : ""}
            to="/dashboard/home"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Get Products" ? "active-link" : ""}
            to="/dashboard/profile"
          >
            Get Products
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Financing" ? "active-link" : ""}
            to="/dashboard/messages"
          >
            Financing
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={current === "Scheduling" ? "active-link" : ""}
            to="/dashboard/settings"
          >
            Scheduling
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default DashboardHeader;
