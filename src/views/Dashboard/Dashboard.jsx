import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import StagesPieChart from "../../Charts/StagesPieCharts";
import ScheduleBarChart from "../../Charts/ScheduleBarChart";
import stagesPieChartData from "../../Data/stagesPieChartData.json";
import scheduleBarChartData from "../../Data/scheduleBarChart.json";
import NewsTable from "../../Tables/NewsTable"; // Import the TableComponent

const Dashboard = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Dashboard"} />
        </Container>
      </Navbar>
      <Row style={{ height: "400px" }}>
        <Col xs={5}>
          <StagesPieChart data={stagesPieChartData} />
        </Col>
        <Col xs={2}>Weather Info</Col>
        <Col xs={5}>
          <ScheduleBarChart data={scheduleBarChartData} />
        </Col>
      </Row>
      <Row>
        <h2 className="text-center text-white ">Latest Construction News!</h2>
      <Col xs={12}>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            <NewsTable data= {NewsTable} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
