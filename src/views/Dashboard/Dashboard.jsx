import React from "react";
import { Container, Navbar, Row, Col, Table } from "react-bootstrap";
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
      <Row style={{padding:'3%'}}>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  TO DO
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>March 17th </td>
                <td>
                  Finalize design and construction plans for current property
                  developments.
                </td>
              </tr>
              <tr>
                <td>March 21th</td>
                <td>Review financials and budget for ongoing projects.</td>
              </tr>
              <tr>
                <td>March 25th</td>
                <td>Yearly Review meeting with stakeholders.</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row style={{ height: "400px" }}>
        <Col xs={7} style={{ backgroundColor:'#CFF4FC', borderRadius:'1%'}}>
          <StagesPieChart data={stagesPieChartData}/>
        </Col>
        <Col xs={1}></Col>
        <Col xs={4} style={{ backgroundColor:'#CFF4FC', borderRadius:'1%'}}>
          <ScheduleBarChart data={scheduleBarChartData} />
        </Col>
      </Row>
      <Row>
        <h2 className="text-center text-white ">Latest Construction News!</h2>
      <Col xs={12}>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            <NewsTable data={NewsTable} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
