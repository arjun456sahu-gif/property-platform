import { SlidersHorizontal } from "lucide-react";

export default function PropertyFilters() {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold text-gray-900">Recommended Properties</h2>
      
      {/* Scrollable container for filters */}
      <div className="flex w-full flex-nowrap items-center gap-3 overflow-x-auto pb-2 sm:w-auto sm:pb-0 hide-scrollbar">
        <button className="flex flex-shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
        <button className="flex-shrink-0 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:bg-gray-50">
          Price Range
        </button>
        <button className="flex-shrink-0 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:bg-gray-50">
          Property Type
        </button>
        <button className="flex-shrink-0 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:bg-gray-50">
          BHK Config
        </button>
      </div>
    </div>
  );
}