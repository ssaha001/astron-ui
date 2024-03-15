import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TableComponent = () => {
  return (
    <table className="news table">
      <tbody>
        <tr>
          <td>
            <p class="text-center"><strong>Stouffville meets housing target while remaining York Region municipalities fail</strong></p>
            <p>The Town of Whitchurch-Stouffville has been awarded $2.6 million through Ontario’s Building Faster Fund after exceeding the 2023 housing target, breaking ground on 1,141 new housing units last year. “I applaud the work being done by Whitchurch-Stouffville and all the other municipalities that have met or exceeded their housing targets ...</p> 
          </td>
        </tr>
        <tr>
          <td>
            <p class="text-center"><strong>OSWA and the wood industry meet at the recent Light-Frame Wood Solutions Conference</strong></p>
            <p> Close to 300 wood industry experts gathered together on Feb. 13 to discuss solutions to Ontario’s housing crisis. The Light-Frame Wood Solutions Conference explored how modular, prefabricated and offsite manufactured construction methods can be used for all types of construction, but could be of particular value in the delivery of much needed housing...</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="text-center"><strong>Guelph mayor directs staff to find creative solutions to housing crisis</strong></p>
            <p> Guelph Mayor Cam Guthrie has signed three mayoral orders directing city staff to: establish the 2025 confirmation budget at a property tax impact of under four per cent. Including information on free transit for high school students. identify real estate opportunities for underutilized city-owned assets, including...</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;