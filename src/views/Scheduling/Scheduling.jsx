import React, { useState } from "react";
import {
  Container,
  Navbar,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import Employees from "../../Data/employees.json";
import "./Scheduling.css";
import { useSelector, useDispatch } from "../../redux/store";
import AddEmpModal from "../../Components/AddEmpModal";
import { addEmployee } from "../../api";
import ShowEmpPwdModal from "../../Components/showEmpPassword";
import { setEmpPwd } from "../../redux/slices/userSlice";
import { fetchEmployee } from "../../redux/slices/employeeSlice";
import UpdateScheduleModal from "../../Components/UpdateScheduleModal";

const Scheduling = () => {
  const dispatch = useDispatch();
  const { user, employee } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEmp, setSelectedEmp]= useState('');
  const dates = [];

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
  const handleCircleClick=(date, emp)=>{
    setSelectedDate(date);
    setSelectedEmp(emp);
    setShowUpdateModal(true);
  }
  const handleSchedulerClose=()=>{
    setSelectedDate('');
    setSelectedEmp('');
    setShowUpdateModal(false);
  }
  const handleSubmit = (body) => {
    addEmployee({ ...body, user: user.id })
      .then((data) => {
        dispatch(setEmpPwd(data["emp"]["password"]));
        dispatch(fetchEmployee(user.id));
        setShowPwdModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Scheduling"} />
        </Container>
      </Navbar>
      <Row>
        <Col>
          <Button onClick={() => setShowModal(true)}>Add Employee</Button>
          <AddEmpModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleAddEmployee={handleSubmit}
          />
          <ShowEmpPwdModal
            show={showPwdModal}
            handleClose={() => setShowPwdModal(false)}
            data={user.empPwd}
          />
          <UpdateScheduleModal
            show={showUpdateModal}
            onHide={handleSchedulerClose}
            date={selectedDate}
            emp={selectedEmp}
          />
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
              {employee.data.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.name}</td>
                  {dates.map((date) => (
                    <td>
                      <OverlayTrigger
                        placement="top"
                        trigger={["hover", "focus"]}
                        delayShow={200}
                        overlay={
                          <Tooltip id="tooltip">
                            {typeof emp[date] === "string" || !emp[date] ? (
                              emp[date] || "Available"
                            ) : (
                              <div>
                                {emp[date]["location"]} : {emp[date]["time"]}
                              </div>
                            )}
                          </Tooltip>
                        }
                      >
                        <div
                          onClick={() => {
                            
                            emp[date] === "Available"
                              ? handleCircleClick(date, emp)
                              : handleSchedulerClose();
                          }}
                          className={`circle-${
                            typeof emp[date] === "string"
                              ? emp[date]
                              : !emp[date]
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
