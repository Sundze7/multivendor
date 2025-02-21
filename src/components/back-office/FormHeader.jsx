"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FormHeader({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-12 dark:bg-slate-700 bg-slate-100 shadow text-slate-800 dark:text-white rounded mb-12">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button onClick={() => router.back()} className="">
        <X />
      </button>
    </div>
  );
}
