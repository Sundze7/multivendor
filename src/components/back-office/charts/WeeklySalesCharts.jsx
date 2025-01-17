"use client";
import { useState } from "react";

export default function WeeklySalesCharts() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];
  const [chartsToDisplay, setChartsToDisplay] = useState(tabs[0].type);
  return (
    <div className="bg-slate-700 p-8  rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>

      <div className="p-4">
        <div class="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                // tabs
                <li class="me-2" key={i}>
                  <button
                    onClick={() => setChartsToDisplay(tab.type)}
                    className={
                      chartsToDisplay === tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100"
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
            return <h2>{tab.title}</h2>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
