import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const TableComponent = () => {
  return (
    <table className="sch table" >
      <tbody>
        <tr>
          <td><p>10:30am     Meeting with  Paolo Smith for the blueprint</p> 
          <p class="text-center">45min</p>
          </td>
          <td>
            <p>Tuesday 09</p>
            </td>
        </tr>
        <tr>
          <td>
            <p>12:00pm     Order the paint for 34 Bridgeway str.(#PPU5-04), (#PPG1049-1)</p>
            <p class="text-center">45 min</p> 
            </td>
        </tr>
        <tr>
          <td> 
            <p>13:45pm      Call the Franceska Sari for the payment for 234 Downstreet avenue </p>
            <p class="text-center">20 min</p>
        </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;