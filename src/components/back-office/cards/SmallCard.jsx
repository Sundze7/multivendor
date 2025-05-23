import { ShoppingCart } from "lucide-react";

export default function SmallCard({ data }) {
  const { title, number, iconBg, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg bg-slate-100 dark:bg-slate-700 p-4 dark:text-slate-100 text-slate-800">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center`}
        >
          <Icon className="text-white" />
        </div>

        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
