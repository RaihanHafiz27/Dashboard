import { OrderStatus } from "@/types/order.type";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { OrderView } from "@/features/Product/Order/components/OrderView";
import { useOrderLogic } from "@/features/Product/Order/hooks/useOrderLogic";

const productOrders = () => {
  const logic = useOrderLogic();

  return <OrderView {...logic} />;
};

export default productOrders;

type Props = {
  status: OrderStatus;
  color: Record<OrderStatus, string>;
  id: string;
  onClick: (id: string, newStatus: OrderStatus) => void;
};

export const StatusDropdown = ({ status, color, id, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  const statuses: OrderStatus[] = [
    "Pending",
    "Processing",
    "Completed",
    "Cancelled",
  ];

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !dropMenuRef.current ||
        dropMenuRef.current.contains(event.target as Node)
      ) {
        return null;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [dropMenuRef]);

  return (
    <div ref={dropMenuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center rounded-sm px-3 py-2 w-full cursor-pointer transition-all duration-300 ${
          color[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        <span className={` text-xs font-semibold leading-tight `}>
          {status}
        </span>
        <ChevronRight
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {/* menu */}
      <div
        className={`z-10 fixed bg-slate-50 dark:bg-slate-800 top-10 right-10 w-40 p-4 rounded-md transition-all duration-300 ease-in-out space-y-2 ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-full opacity-0 invisible"
        }`}
      >
        {statuses.map((stat) => (
          <button
            key={stat}
            onClick={() => {
              onClick(id, stat);
              setIsOpen(!isOpen);
            }}
            className={`flex justify-between items-center rounded-sm px-3 py-2 w-full cursor-pointer transition-all duration-300 ${
              color[stat] || "bg-gray-100 text-gray-700"
            } border border-${color[stat]} `}
          >
            {stat}
          </button>
        ))}
      </div>
    </div>
  );
};
