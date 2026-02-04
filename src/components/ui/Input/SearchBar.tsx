import { Search } from "lucide-react";

interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  classname?: string;
}

export const SearchBar = ({
  placeholder,
  value,
  onChange,
  classname,
}: SearchProps) => {
  return (
    <div className={`relative ${classname}`}>
      <input
        type="text"
        title={placeholder}
        placeholder={placeholder ? placeholder : "Search..."}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="bg-slate-200 dark:bg-transparent border border-slate-200 dark:border-gray-500 p-2 w-full rounded-sm text-sm  placeholder:text-gray-700 text-gray-700 focus:outline-none disabled:cursor-not-allowed"
        disabled={!onChange}
      />
      <button className={`absolute right-2 top-1/2 -translate-y-1/2`} disabled>
        <Search size={20} className="text-slate-400 dark:text-slate-300" />
      </button>
    </div>
  );
};
