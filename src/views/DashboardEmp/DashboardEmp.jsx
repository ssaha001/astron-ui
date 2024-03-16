import React from "react";
import EmployeeTable from "../../Tables/EmployeeTable"; // Import the Table component

const DashboardEmp=()=>{
return(<>
      <h1>Employee Dashboard</h1>
      <EmployeeTable data={EmployeeTable}/> 
</>
);
};
export default DashboardEmp