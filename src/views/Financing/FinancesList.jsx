import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import financesData from "../../Data/financesData.json";
const FinancingList = ({ dataPoint }) => {
  const income = financesData.income.filter(
    (income) => income.date === dataPoint
  );
  const expenses = financesData.expenses.filter(
    (expense) => expense.date === dataPoint
  );
  const totalExpenses = expenses.reduce(
    (total, current) => total + current.amount,
    0
  );
  const totalIncome = income.reduce(
    (total, current) => total + current.amount,
    0
  );
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Expenses for {dataPoint}</Card.Title>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.description}: ${expense.amount}
              </li>
            ))}
            {totalExpenses && (
              <p>
                <b>Total Expense: </b>${totalExpenses}
              </p>
            )}
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Income for {dataPoint}</Card.Title>
          <ul>
            {income.map((income, index) => (
              <li key={index}>
                {income.description}: ${income.amount}
              </li>
            ))}
            {totalIncome && (
              <p>
                <b>Total Income: </b>${totalIncome}
              </p>
            )}
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            {`${totalIncome - totalExpenses > 0 ? "Profit" : "Loss"}`} on{" "}
            {dataPoint}
          </Card.Title>
          {(totalIncome || totalExpenses) && <h5>${totalIncome}</h5>}
        </Card.Body>
      </Card>
    </>
  );
};
export default FinancingList;
