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
          style={{borderRadius:'5%'}}
            as={Link}
            className={current === "Dashboard" ? "active-link" : ""}
            to="/dashboard"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
          style={{borderRadius:'5%'}}
            as={Link}
            className={current === "Projects" ? "active-link" : ""}
            to="/projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
          style={{borderRadius:'5%'}}
            as={Link}
            className={current === "Get Materials" ? "active-link" : ""}
            to="/materials"
          >
            Get Materials
          </Nav.Link>
          <Nav.Link
          style={{borderRadius:'5%'}}
            as={Link}
            className={current === "Financing" ? "active-link" : ""}
            to="/financing"
          >
            Financing
          </Nav.Link>
          <Nav.Link
          style={{borderRadius:'10%'}}
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
