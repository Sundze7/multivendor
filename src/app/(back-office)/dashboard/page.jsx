import Heading from "@/components/back-office/Heading";
import LargeCards from "@/components/back-office/cards/LargeCards";
import SmallCards from "@/components/back-office/cards/SmallCards";
import DashboardCharts from "@/components/back-office/charts/DashboardCharts";
import CustomDataTables from "@/components/back-office/tables/CustomDataTables";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* large cards */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* charts */}
      <DashboardCharts />
      {/* recent order table */}
      <CustomDataTables />
    </div>
  );
}
