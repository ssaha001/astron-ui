import React from "react";
import EmployeeTable from "../../Tables/EmployeeTable"; // Import the Table component
import { Table } from "react-bootstrap";
import EmployeeSchedule from "../../Data/employeeSchedule.json"

const DashboardEmp=()=>{
return(<>
      <h1>Your schedule:</h1>
      <Table>
            <thead>
                  <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>StartTime</th>
                        <th>End Time</th>
                  </tr>
            </thead>
            <tbody>
                  {EmployeeSchedule.map((emp)=><tr>
                        <td>{emp.date}</td>
                        <td>{emp.location}</td>
                        <td>{emp.time.split('-')[0]}</td>
                        <td>{emp.time.split('-')[1]}</td>
                  </tr>)}
            </tbody>
      </Table>
</>
);
};
export default DashboardEmp