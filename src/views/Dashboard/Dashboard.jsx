import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import StagesPieChart from "../../Charts/StagesPieCharts";
import ScheduleBarChart from "../../Charts/ScheduleBarChart";
import stagesPieChartData from "../../Data/stagesPieChartData.json";
import scheduleBarChartData from "../../Data/scheduleBarChart.json";
import ScheduleTable from "../../Tables/ScheduleTable";
import NewsTable from "../../Tables/NewsTable";


const Dashboard = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Dashboard"} />
        </Container>
      </Navbar>
      <Row>
      <Col xs={4}>
          <ScheduleTable />
        </Col>
        <Col xs={15} md={6}>
          <ScheduleBarChart data={scheduleBarChartData} />
        </Col>
      </Row>
      <Row>
      <Col xs={10} md={4}>
          <StagesPieChart data={stagesPieChartData} />
        </Col>
        <Col xs={2}>Weather Info</Col>
      </Row>
      <Row>
      <Col xs={15}>
          <NewsTable />
        </Col>
        </Row>
    </Container>
  );
};

export default Dashboard;
