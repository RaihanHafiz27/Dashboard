import { useFloatingMenu } from "@/hooks/useFloatingMenu";
import { OrderStatus } from "@/types/order.type";
import { ChevronRight, Command, ListFilter } from "lucide-react";

interface FilterProps {
  statusFiltered: string | OrderStatus;
  setStatusFiltered: React.Dispatch<React.SetStateAction<string | OrderStatus>>;
}

const statuses: OrderStatus[] = [
  "Pending",
  "Processing",
  "Completed",
  "Cancelled",
];

export const FilterStatus = ({
  statusFiltered,
  setStatusFiltered,
}: FilterProps) => {
  const {
    open,
    setOpen,
    floatingStyles,
    refs,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingMenu();

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="bg-slate-200 dark:bg-transparent border border-slate-200 dark:border-gray-500  p-2 gap-2 w-full rounded-sm text-sm text-start flex justify-between cursor-pointer"
      >
        <span className="text-gray-700 dark:text-gray-500 font-medium truncate">
          {statusFiltered}
        </span>
        <ListFilter size={20} className="text-slate-400 shrink-0" />
      </button>
      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="z-50 focus:outline-none"
        >
          <div
            className={`bg-slate-200 p-2 rounded-md transition-all duration-200 animate-pop`}
          >
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    (setStatusFiltered("All"), setOpen(false));
                  }}
                  className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-slate-800/10 dark:hover:bg-slate-70  p-2 rounded-md text-gray-700"
                >
                  <span>All</span>
                  <div className="flex items-center">
                    <Command size={16} />
                    <span>A</span>
                  </div>
                </button>
              </li>
              {statuses?.map((label) => (
                <li key={label} className="">
                  <button
                    onClick={() => {
                      (setStatusFiltered(label), setOpen(false));
                    }}
                    className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-slate-800/10 dark:hover:bg-slate-70  p-2 rounded-md text-gray-700"
                  >
                    <span>{label}</span>
                    <div className="flex items-center">
                      <Command size={16} />
                      <span>{label.substring(0, 1)}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
