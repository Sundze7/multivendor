"use client";
import { useState } from "react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export default function WeeklySalesCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.5)",
          },
        ],
      },
    },
  ];
  const [chartsToDisplay, setChartsToDisplay] = useState(tabs[0].type);
  return (
    <div className="dark:bg-slate-700 bg-slate-100 p-8 shadow-xl rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        Weekly Sales
      </h2>

      <div className="p-4">
        <div className="text-sm font-medium text-center border-b border-gray-400 dark:text-gray-400 dark:border-gray-700 text-slate-800">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                // tabs
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartsToDisplay(tab.type)}
                    className={
                      chartsToDisplay === tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-500 hover:border-slate-300 dark:hover:text-gray-100"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Content to display */}
        {tabs.map((tab, i) => {
          if (chartsToDisplay === tab.type) {
            return <Line options={options} data={tab.data} key={i} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
