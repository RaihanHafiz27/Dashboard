import { Command } from "lucide-react";

const list = ["Latest", "Price", "Status"];

export const FilterDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`z-10 absolute bg-slate-200 top-16 right-4 p-2 rounded-md transition-all duration-300 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
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
