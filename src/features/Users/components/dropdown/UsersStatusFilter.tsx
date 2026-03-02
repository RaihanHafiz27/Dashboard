import { ChevronRight, ListFilter } from "lucide-react";

interface statusFilterProps {
  selected: string;
  open: boolean;
}

export const UsersStatusFilter = (props: statusFilterProps) => {
  const { selected, open } = props;
  return (
    <button
      // ref={refs.setReference}
      // {...getReferenceProps()}
      className="bg-slate-200 dark:bg-transparent border border-slate-200 dark:border-gray-500  p-2 gap-2 w-full rounded-sm text-sm text-start flex justify-between cursor-pointer"
    >
      <span className="text-gray-700 dark:text-gray-500 font-medium truncate">
        {selected}
      </span>
      <ListFilter size={20} className="text-slate-400 shrink-0" />
    </button>
  );
};
