import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Orders",
      number: 500,
      icon: ShoppingCart,
      iconBg: "bg-green-600 ",
    },
    {
      title: "Orders Pending",
      number: 50,
      icon: Loader2,
      iconBg: "bg-orange-600 ",
    },
    {
      title: "Orders Processing",
      number: 150,
      icon: RefreshCcw,
      iconBg: "bg-blue-600 ",
    },
    {
      title: "Orders Delivered",
      number: 300,
      icon: CheckCheck,
      iconBg: "bg-red-600",
    },
    {
      title: "All-time Orders",
      number: 60000,
      icon: ShoppingCart,
      iconBg: "bg-purple-600  ",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
