import React, { useState } from "react";
import {
  Container,
  Navbar,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import Employees from "../../Data/employees.json";
import "./Scheduling.css";

const Scheduling = () => {
  const dates = [];
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  };

  const handleMouseOut = () => {
    setShowPopup(false);
  };
  for (let i = -1; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(
      date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Scheduling"} />
        </Container>
      </Navbar>
      <Row>
        <Col>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Name</th>
                {dates.map((date) => (
                  <th>
                    {new Date(date).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                    })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  {dates.map((date) => (
                    <td>
                      <OverlayTrigger
                        placement="top"
                        trigger="hover"
                        delayShow={200}
                        overlay={
                          <Tooltip id="tooltip">
                            {typeof employee[date] === "string" ||
                            !employee[date] ? (
                              employee[date] || "Available"
                            ) : (
                              <div>
                                {employee[date]["location"]} :{" "}
                                {employee[date]["time"]}
                              </div>
                            )}
                          </Tooltip>
                        }
                      >
                        <div
                          className={`circle-${
                            typeof employee[date] === "string"
                              ? employee[date]
                              : !employee[date]
                              ? "Available"
                              : "Scheduled"
                          }`}
                        />
                      </OverlayTrigger>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Scheduling;
