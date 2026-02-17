import { useFloatingMenu } from "@/hooks/useFloatingMenu";
import { OrderStatus } from "@/types/order.type";
import { FloatingPortal } from "@floating-ui/react";
import { ChevronRight } from "lucide-react";

type Props = {
  status: OrderStatus;
  color: Record<OrderStatus, string>;
  id: string;
  onClick: (id: string, newStatus: OrderStatus) => void;
};

export const ChangeStatus = ({ status, color, id, onClick }: Props) => {
  const {
    open,
    setOpen,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingMenu();

  const statuses: OrderStatus[] = [
    "Pending",
    "Processing",
    "Completed",
    "Cancelled",
  ];

  return (
    <>
      {/* Button */}
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={`flex justify-between items-center rounded-sm px-3 py-2 w-32 cursor-pointer transition-all duration-300 mx-auto ${
          color[status] || "bg-gray-100 text-gray-700"
        } `}
      >
        <span className={` text-xs leading-tight `}>{status}</span>
        <ChevronRight
          size={20}
          strokeWidth={1}
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[998]"
          >
            <div
              className={`bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 shadow-xl p-2 text-sm rounded-md animate-pop w-32 hover:scale-103 transition-all duration-300`}
            >
              {statuses.map((stat) => (
                <button
                  key={stat}
                  onClick={() => {
                    onClick(id, stat);
                    setOpen(false);
                  }}
                  className={`flex justify-between items-center rounded-sm px-4 py-2 w-full cursor-pointer transition-all duration-200  text-slate-700 dark:text-slate-200 hover:bg-slate-800/10 dark:hover:bg-slate-700`}
                >
                  {stat}
                </button>
              ))}
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
