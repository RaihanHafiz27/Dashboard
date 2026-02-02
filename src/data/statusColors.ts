import { OrderStatus } from "@/types/order.type";

export const statusColors: Record<OrderStatus, string> = {
  Pending:
    "bg-transparent border border-gray-300 dark:border dark:border-gray-100 text-gray-700 dark:text-slate-200",
  Processing:
    "bg-gray-500 border border-gray-300 dark:border-gray-700  dark:bg-gray-700 text-slate-200 dark:text-slate-200",
  Completed:
    "bg-gray-800 border border-gray-300 dark:border-slate-100 dark:bg-slate-100 text-slate-200 dark:text-gray-800",
  Cancelled:
    "line-through bg-slate-200 border border-slate-200 dark:border-gray-600  dark:bg-transparent text-gray-400 dark:text-gray-600",
};
