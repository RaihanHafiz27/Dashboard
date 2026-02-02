import { Command } from "lucide-react";

const list = ["Latest", "Price", "Status"];

export const FilterDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`z-10 absolute bg-slate-200 top-16 right-4 p-2 rounded-md transition-all duration-200 ease-in-out ${
        isOpen
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "-translate-y-2 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <ul className="space-y-2">
        <li>
          <button
            // onClick={() => onFilterChange?.("all")}
            className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
          >
            <span>Newest</span>
            <div className="flex items-center">
              <Command size={20} />
              <span>N</span>
            </div>
          </button>
        </li>
        {list?.map((label) => (
          <li key={label} className="">
            <button
              // onClick={() => onFilterChange?.(label)}
              className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
            >
              <span>{label}</span>
              <div className="flex items-center">
                <Command size={20} />
                <span>{label.substring(0, 1)}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
