import { ChevronRight } from "lucide-react";

interface FilterProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterButton = ({ isOpen, setIsOpen }: FilterProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-slate-200 dark:bg-transparent border border-gray-300 dark:border-gray-500  p-2 w-full rounded-sm text-sm text-start flex justify-between cursor-pointer"
    >
      <div>
        <span className="text-gray-500 dark:text-gray-300">Short by : </span>
        <span className="text-gray-700 dark:text-gray-500">Newest</span>
      </div>
      <ChevronRight
        size={20}
        className={` text-slate-400 transition-all duration-300  ${isOpen ? "rotate-90" : "rotate-0"}`}
      />
    </button>
  );
};
