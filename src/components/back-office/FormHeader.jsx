import { X } from "lucide-react";

export default function FormHeader({ title }) {
  return (
    <div className="flex items-center justify-between py-6 px-12 dark:bg-slate-700 bg-slate-100 shadow text-slate-800 dark:text-white rounded">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button className="">
        <X />
      </button>
    </div>
  );
}
