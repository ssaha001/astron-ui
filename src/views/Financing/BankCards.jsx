import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Banks from "../../Data/bankinfo.json";

const BankCards = () => {
  const [number, setNumber] = useState(""); // State to store the number value

  const calculateMonthlyInterest = (interestRate, years) => {
    // Assuming the interest rate is given in percentage
    const monthlyInterestRate = interestRate / 100;
    const numberOfMonths = years * 12; // Convert years to months
    const monthlyPayment =
      (number * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
    const monthlyInterest = monthlyPayment - number / numberOfMonths;
    return monthlyInterest.toFixed(2); // Round to 2 decimal places
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here, if needed
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="text-center mb-3">
          <Form.Group controlId="formBasicNumber" className="formField">
            <img
              src="https://live.staticflickr.com/65535/53589740601_4e3fb9d5c2_o.png"
              alt="Money icon"
              width="100"
            />
          </Form.Group>
        </div>
        <br />
        <Form.Group controlId="formBasicNumber" className="formField">
          <Form.Label className="text-center">
            <h2>
              <strong>Enter amount:</strong>
            </h2>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
      </Form>

      {/* Bank information table */}
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        <table className="table" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Interest (%)</th>
              <th>Years</th>
              <th>Interest per month</th>{" "}
              {/* New column for monthly interest */}
            </tr>
          </thead>
          <tbody>
            {Banks.map((bank, index) => (
              <tr key={index} style={{ border: "none" }}>
                <td>{bank.name}</td>
                <td>{bank.interest}</td>
                <td>{bank.years}</td>
                <td>
                  {calculateMonthlyInterest(bank.interest, bank.years)}
                </td>{" "}
                {/* Calculate and display monthly interest */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankCards;
