import React from "react";
import { useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import financesData from "../Data/financesData.json";

const FinancesLineChart = ({ setSelectedDate }) => {
  const chartRef = useRef(null);
  const convertDate = (dateStr) => {
    const [month, day] = dateStr.split(" ");
    const monthNum = new Date(Date.parse(`2024-${month}-01`)).getMonth() + 1;
    return `2024-${monthNum < 10 ? "0" + monthNum : monthNum}-${
      day.length === 1 ? "0" + day : day
    }`;
  };
  const convertDateToString = (date) => {
    const obj = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    const [year, month, day] = date.split("-");
    return `${obj[parseInt(month)] + " " + day}`;
  };
  const allDates = financesData.expenses
    .map((expense) => expense.date)
    .concat(financesData.income.map((income) => income.date));

  // Remove duplicates and sort dates
  const convertedUniqueDates = [
    ...new Set(allDates.map((date) => convertDate(date))),
  ].sort();
  const uniqueDates = convertedUniqueDates.map((date) =>
    convertDateToString(date)
  );
  const totalIncomeByDate = convertedUniqueDates.map((date) => {
    const totalIncome = financesData["income"]
      .filter((item) => convertDate(item.date) === date)
      .reduce((total, item) => total + item.amount, 0);
    return totalIncome || 0; // Return 0 if there is no income for the date
  });
  const totalExpensesByDate = [];
  convertedUniqueDates.forEach((date) => {
    const totalExpenses = financesData["expenses"]
      .filter((item) => convertDate(item.date) === date)
      .reduce((total, item) => total + item.amount, 0);
    totalExpensesByDate.push(totalExpenses || 0); // Push 0 if there are no expenses for the date
  });
  const handleClick = (
    event,
    chartContext,
    { seriesIndex, dataPointIndex, config }
  ) => {
    setSelectedDate(uniqueDates[dataPointIndex]);
  };
  const series = [
    {
      name: "Expenses",
      data: totalExpensesByDate,
    },
    {
      name: "Income",
      data: totalIncomeByDate,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      events: {
        markerClick: handleClick,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Upcoming Expenses and Earning",
      align: "left",
    },
    grid: {
      show: true,
      padding: {
        left: 20,
        right: 20,
      },
    },
    xaxis: {
      type: "category",
      categories: uniqueDates,
    },
  };
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
        ref={chartRef}
      />
    </>
  );
};

export default FinancesLineChart;
