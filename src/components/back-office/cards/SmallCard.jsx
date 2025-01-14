import { ShoppingCart } from "lucide-react";

export default function SmallCard() {
  return (
    <div className="rounded-lg shadow-lg bg bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
          <ShoppingCart />
        </div>

        <div className="">
          <p>Totoal Order</p>
          <h3 className="text-2xl font-bold">553</h3>
        </div>
      </div>
    </div>
  );
}
