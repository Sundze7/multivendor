import { Search, Trash, Download } from "lucide-react";

export default function TableActions() {
  return (
    <div className="flex justify-between py-4 px-12 bg-slate-700 rounded-lg gap-4">
      <button className="inline-flex relative  items-center justify-center px-4 py-3 mb-2 me-2 text-base font-medium  rounded-lg group bg-slate-800 border-lime-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-500 space-x-3">
        <Download />
        <span>Export</span>
      </button>
      {/* search */}
      <div className="flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      {/* Bulk Delete */}
      <button className="flex items-center space-x-2 bg-red-500 text-white rounded-lg px-4">
        <Trash />
        <span>Bulk Delete</span>
      </button>
    </div>
  );
}
