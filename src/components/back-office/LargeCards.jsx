import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: "250k",
      color: "bg-green-600 ",
    },
    {
      period: "Yesterday Orders",
      sales: "200k",
      color: "bg-orange-600 ",
    },
    {
      period: "This Month",
      sales: "4.0M",
      color: "bg-blue-600 ",
    },
    {
      period: "Last Month",
      sales: "3.5M",
      color: "bg-purple-600 ",
    },
    {
      period: "All-time Sales",
      sales: "100M",
      color: "bg-red-600 ",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item, i) => {
        return <LargeCard className="" data={item} key={i} />;
      })}
    </div>
  );
}
