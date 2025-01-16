import BestSellingProductsChart from "./BestSellingProductsChart";
import WeeklySalesCharts from "./WeeklySalesCharts";
export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesCharts />
      <BestSellingProductsChart />
    </div>
  );
}
