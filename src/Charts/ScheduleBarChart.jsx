import React from "react";
import ReactApexChart from "react-apexcharts";
const ScheduleBarChart = ({ data }) => {
  const chartInfo = {
    series: data,
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      colors: [
        // this array contains different color code for each data
        "#fa4848",
        "#5da669",
      ],
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "Employee Availability",
      },
      xaxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },

      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartInfo.options}
          series={chartInfo.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ScheduleBarChart;
