import { ChevronRight, Command } from "lucide-react";
import { useFloatingMenu } from "@/hooks/useFloatingMenu";
import { FloatingPortal } from "@floating-ui/react";

interface FilterControlProps {
  options: string[];
  selected: string;
  onChange: (val: string) => void;
}

export const FilterControl = ({
  options,
  selected,
  onChange,
}: FilterControlProps) => {
  const {
    open,
    setOpen,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingMenu();

  return (
    <>
      {/* trigger button */}
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={` cursor-pointer border border-gray-400 dark:border-gray-600  text-gray-700 dark:text-gray-300 flex w-32 py-1 px-2 justify-between text-sm items-center rounded-md hover:scale-105 transition-all duration-300 `}
      >
        <span className="capitalize">{selected}</span>
        <ChevronRight
          size={20}
          strokeWidth={1}
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
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
              className={` bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 shadow-xl p-2 rounded-md animate-pop w-40 hover:scale-103 transition-all duration-300`}
            >
              <ul className="space-y-2">
                {/* Opsi: All */}
                <li>
                  <button
                    onClick={() => {
                      onChange("all");
                      setOpen(false);
                    }}
                    className="cursor-pointer flex text-sm justify-between items-center w-full hover:bg-gray-400/20 hover:dark:bg-slate-600/20 duration-300 p-2 rounded-md text-gray-700 dark:text-slate-200"
                  >
                    <span>All</span>
                    <div className="flex items-center text-xs">
                      <Command size={14} className="mr-1" /> A
                    </div>
                  </button>
                </li>

                {/* Options Loop from Props */}
                {options.map((opt) => (
                  <li key={opt}>
                    <button
                      onClick={() => {
                        onChange(opt);
                        setOpen(false);
                      }}
                      className="cursor-pointer flex text-sm justify-between items-center w-full hover:bg-gray-400/20  hover:dark:bg-slate-600/20 duration-300 p-2 rounded-md text-gray-700 dark:text-slate-200"
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
        </FloatingPortal>
      )}
    </>
  );
};
