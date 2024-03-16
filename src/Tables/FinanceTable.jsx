import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TableComponent = () => {
  return (
    <table className="Financing table">
      <tbody>
        <tr>
            <td>
            <img src="https://live.staticflickr.com/65535/53589740601_4e3fb9d5c2_o.png" alt="Money icon" width="200" />
            </td>
            </tr>
        <tr>
          <td>
            <p class="text-center"><strong>Need Financing?</strong></p>
            </td>
        </tr>
        <tr>
          <td>
          <img src="https://live.staticflickr.com/65535/53589944928_2ca3065409_o.png" alt="ok button" width="100" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;