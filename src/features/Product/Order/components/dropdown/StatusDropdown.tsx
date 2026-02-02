import { useClickOutside } from "@/hooks/useClickOutside";
import { OrderStatus } from "@/types/order.type";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
  status: OrderStatus;
  color: Record<OrderStatus, string>;
  id: string;
  onClick: (id: string, newStatus: OrderStatus) => void;
};

export const StatusDropdown = ({ status, color, id, onClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropMenuRef = useClickOutside(() => setOpen(false));

  const statuses: OrderStatus[] = [
    "Pending",
    "Processing",
    "Completed",
    "Cancelled",
  ];

  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,

    middleware: [
      offset(8), // jarak dari button
      flip(), // auto flip kalau mentok
      shift(), // geser kalau keluar viewport
    ],

    whileElementsMounted: autoUpdate,
  });

  return (
    <div ref={dropMenuRef} className="relative">
      <button
        // onClick={() => handleDropdown()}
        ref={refs.setReference}
        onClick={() => setOpen((v) => !v)}
        className={`flex justify-between items-center rounded-sm px-3 py-2 w-full cursor-pointer transition-all duration-300 ${
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

      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={`z-50 bg-slate-200 dark:bg-slate-800 rounded-md p-2 transition-all duration-200 ease-in-out space-y-2 shadow-lg ${
          open
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "-translate-y-2 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {statuses.map((stat) => (
          <button
            key={stat}
            onClick={() => {
              onClick(id, stat);
              setOpen(!open);
            }}
            className={`flex justify-between items-center rounded-sm px-6 py-2 w-full cursor-pointer transition-all duration-200 hover:bg-slate-800/10 dark:hover:bg-slate-700`}
          >
            {stat}
          </button>
        ))}
      </div>
    </div>
  );
};
