"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Banana", "Watermelon", "Irish Potatoes", "Tomatoes", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 25, 40, 15, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dark:bg-slate-700 bg-slate-100 shadow-xl p-8  rounded-lg">
      <h2 className="text-xl font-bold mb-4 dark:text-slate-100 text-slate-800">
        Best Selling Products
      </h2>
      <Pie data={data} />
    </div>
  );
}
