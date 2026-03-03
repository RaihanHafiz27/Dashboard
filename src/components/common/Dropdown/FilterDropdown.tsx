import { Command, ListFilter } from "lucide-react";
import { useFloatingMenu } from "@/hooks/useFloatingMenu";
import { FloatingPortal } from "@floating-ui/react";

interface FilterDropdownProps<T extends string> {
  value: T | "All";
  options: T[];
  onChange: (val: T | "All") => void;
  placeholder?: string;
  chart?: boolean;
}

export const FilterDropdown = <T extends string>(
  props: FilterDropdownProps<T>,
) => {
  const { value, options, onChange, placeholder = "Filter", chart } = props;

  const {
    open,
    setOpen,
    floatingStyles,
    refs,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingMenu();

  const triggerClasses = chart
    ? "bg-transparent border-none p-0 justify-end"
    : "bg-slate-200 dark:bg-transparent p-2 justify-between border border-slate-200 dark:border-gray-500";

  const iconClasses = chart
    ? "text-gray-500 hover:scale-125 transition-all duration-200"
    : "text-slate-400";

  return (
    <>
      {/* trigger button */}
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={`flex items-center ${triggerClasses} gap-2 w-full rounded-sm text-sm text-start cursor-pointer`}
      >
        {!chart && (
          <span className="text-gray-700 dark:text-gray-500 font-medium truncate">
            {value || placeholder}
          </span>
        )}
        <ListFilter size={20} className={`shrink-0 ${iconClasses}`} />
      </button>

      {/* popup menu */}
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[998]"
          >
            <div
              className={`bg-slate-200 p-2 rounded-md transition-all duration-200 animate-pop`}
            >
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      (onChange("All"), setOpen(false));
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
                {options?.map((label) => (
                  <li key={label} className="">
                    <button
                      onClick={() => {
                        (onChange(label), setOpen(false));
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
        </FloatingPortal>
      )}
    </>
  );
};
