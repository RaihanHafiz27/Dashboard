import { useState } from "react";
import { ChevronRight, Command } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface FilterControlProps {
  label: string;
  options: string[];
  selected: string;
  onChange: (val: string) => void;
}

export const FilterControl = ({
  label,
  options,
  selected,
  onChange,
}: FilterControlProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className="flex justify-between items-center px-4 pt-4">
      {/* title*/}
      <h3 className="font-semibold text-gray-600 dark:text-gray-300">
        {label}
      </h3>

      {/* container dropdown */}
      <div ref={menuRef} className="relative">
        {/* trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={` cursor-pointer border border-gray-400 dark:border-gray-600  text-gray-700 dark:text-gray-300 flex w-32 py-1 px-2 justify-between text-sm items-center rounded-md`}
        >
          <span className="capitalize">{selected}</span>
          <ChevronRight
            size={20}
            strokeWidth={1}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* popup menu */}
        <div
          className={`z-10 absolute bg-slate-200 top-full mt-2 -right-5 p-2 rounded-md transition-all duration-300 ease-in-out w-40 shadow-lg ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-2 opacity-0 invisible"
          }`}
        >
          <ul className="space-y-2">
            {/* Opsi: All */}
            <li>
              <button
                onClick={() => {
                  onChange("all");
                  setIsOpen(false);
                }}
                className="cursor-pointer flex text-sm justify-between items-center w-full hover:bg-gray-400/40 p-2 rounded-md text-gray-700"
              >
                <span>All</span>
                <div className="flex items-center text-xs">
                  <Command size={14} className="mr-1" /> A
                </div>
              </button>
            </li>

            {/* Opsi: Loop from Props */}
            {options.map((opt) => (
              <li key={opt}>
                <button
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer flex text-sm justify-between items-center w-full hover:bg-gray-400/40 p-2 rounded-md text-gray-700"
                >
                  <span className="capitalize">{opt}</span>
                  <div className="flex items-center text-xs">
                    <Command size={14} className="mr-1" />
                    {opt.charAt(0).toUpperCase()}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
