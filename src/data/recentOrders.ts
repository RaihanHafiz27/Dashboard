import { Order, OrderStatus } from "@/types/order.type";

export const recentOrders: Order[] = [
  {
    id: "#1023",
    customer: "John Doe",
    date: "2025-09-08",
    status: "Completed",
    amount: 3200,
  },
  {
    id: "#1024",
    customer: "Jane Smith",
    date: "2025-09-07",
    status: "Pending",
    amount: 1500,
  },
  {
    id: "#1025",
    customer: "Michael Lee",
    date: "2025-09-07",
    status: "Processing",
    amount: 8799,
  },
  {
    id: "#1026",
    customer: "Sarah Johnson",
    date: "2025-09-06",
    status: "Completed",
    amount: 2200,
  },
  {
    id: "#1027",
    customer: "David Kim",
    date: "2025-09-06",
    status: "Cancelled",
    amount: 11500,
  },
];

export const statusColors: Record<OrderStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};
