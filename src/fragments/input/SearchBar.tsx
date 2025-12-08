import { Search } from "lucide-react";

export const SearchBar = ({ isFull }: { isFull?: boolean }) => {
  return (
    <div className={`relative ${isFull ? "block" : "hidden"}`}>
      <input
        type="text"
        placeholder="Search for..."
        className="bg-gray-200/10 border border-gray-300 dark:border-gray-500 p-2 w-full rounded-sm text-sm cursor-not-allowed placeholder:text-gray-400 text-gray-700"
        disabled
      />
      <button className={`absolute top-2 right-2 cursor-not-allowed`} disabled>
        <Search size={20} className="text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};
