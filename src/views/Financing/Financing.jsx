import React, { useState } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import FinancesLineChart from "../../Charts/FinancesLineChart";
import FinancingList from "./FinancesList";
import BankCards from "./BankCards";

const Financing = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Financing"} />
        </Container>
      </Navbar>
      <Row>
        <Col>
          <FinancesLineChart setSelectedDate={setSelectedDate} />
        </Col>
      </Row>
      <Row
        style={{
          display: selectedDate ? "flex" : "none",
          flexDirection: "column",
          backgroundColor: "lightgray",
        }}
      >
        <Button
          onClick={() => {
            setSelectedDate("");
          }}
          className="ml-auto mt-2 mr-2"
          style={{ width: "10%", alignSelf: "end", marginRight: "2%" }}
        >
          Close
        </Button>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: "20px",
          }}
        >
          <FinancingList dataPoint={selectedDate} />
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={8} lg={6} style={{ backgroundColor: "#D0EFE8" }}> 
          <BankCards dataPoint={BankCards}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Financing;