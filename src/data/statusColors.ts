import { OrderStatus } from "@/types/order.type";

export const statusColors: Record<OrderStatus, string> = {
  Pending:
    "bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 dark:hover:bg-yellow-100 text-yellow-700 dark:text-yellow-500",
  Processing:
    "bg-blue-100  dark:bg-transparent dark:border dark:border-blue-300 dark:hover:bg-blue-100 text-blue-700 dark:text-blue-300",
  Completed:
    "bg-green-100  dark:bg-transparent dark:border dark:border-green-300 dark:hover:bg-green-100 text-green-700 dark:text-green-400",
  Cancelled:
    "bg-red-100  dark:bg-transparent dark:border dark:border-red-300 dark:hover:bg-red-100 text-red-700 dark:text-red-400",
};
