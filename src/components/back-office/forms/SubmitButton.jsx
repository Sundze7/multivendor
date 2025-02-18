import { Plus } from "lucide-react";
import React from "react";

export default function SubmitButton({
  isLoading = false,
  buttonTitle,
  loadingButtonTitle,
}) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="button"
          className="mt-4 text-slate-100 bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none text-sm font-medium text-center focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 inline-flex items-center"
        >
          {" "}
          <Plus /> <span>{loadingButtonTitle} </span>
        </button>
      ) : (
        <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-slate-100 bg-slate-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700">
          <Plus className="w-5 h-5 mr-2" />
          <span>{buttonTitle}</span>
        </button>
      )}
    </div>
  );
}
