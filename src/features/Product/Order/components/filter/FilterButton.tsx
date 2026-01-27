import { ChevronRight } from "lucide-react";

interface FilterProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterButton = ({ isOpen, setIsOpen }: FilterProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-gray-200/10 border border-gray-300 dark:border-gray-500  p-2 w-full rounded-sm text-sm text-start flex justify-between cursor-pointer"
    >
      <div>
        <span className="text-gray-500 dark:text-gray-300">Short by : </span>
        <span className="text-gray-700 dark:text-gray-500">Newest</span>
      </div>
      <ChevronRight
        size={20}
        color="#6a7282"
        className={`${isOpen ? "transition-all duration-300 rotate-90" : ""}`}
      />
    </button>
  );
};
