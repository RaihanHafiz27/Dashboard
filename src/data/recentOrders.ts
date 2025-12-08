import { Order, OrderStatus } from "@/types/order.type";

// export const recentOrders: Order[] = [
//   {
//     id: "#1023",
//     customerName: "John Doe",
//     date: "2025/09/08",
//     status: "Completed",
//     amount: 3200,
//     productName: "Longines Master Collection",
//     imageUrl: "/images/1.webp",
//     quantity: 12,
//   },
//   {
//     id: "#1024",
//     customerName: "Jane Smith",
//     date: "2025/09/07",
//     status: "Pending",
//     amount: 1500,
//     productName: "iPad Mini 2021 Starlight",
//     imageUrl: "/images/2.webp",
//     quantity: 22,
//   },
//   {
//     id: "#1025",
//     customerName: "Michael Lee",
//     date: "2025/09/07",
//     status: "Processing",
//     amount: 8799,
//     productName: "Women Handbag Black",
//     imageUrl: "/images/3.webp",
//     quantity: 256,
//   },
//   {
//     id: "#1026",
//     customerName: "Sarah Johnson",
//     date: "2025/09/06",
//     status: "Completed",
//     amount: 2200,
//     productName: "Longines Master Collection",
//     imageUrl: "/images/1.webp",
//     quantity: 99,
//   },
//   {
//     id: "#1027",
//     customerName: "David Kim",
//     date: "2025/09/06",
//     status: "Cancelled",
//     amount: 11500,
//     productName: "Longines Master Collection",
//     imageUrl: "/images/3.webp",
//     quantity: 77,
//   },
// ];

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

// export const orders: Order[] = [
//   {
//     id: "#1023",
//     customer: "John Doe",
//     date: "2025/09/08",
//     status: "Completed",
//     amount: 3200,
//     title: "Longines Master Collection",
//     image: "/images/1.webp",
//   },
//   {
//     id: "#1024",
//     customer: "Jane Smith",
//     date: "2025/09/07",
//     status: "Pending",
//     amount: 1500,
//     title: "iPad Mini 2021 Starlight",
//     image: "/images/2.webp",
//   },
//   {
//     id: "#1025",
//     customer: "Michael Lee",
//     date: "2025/09/07",
//     status: "Processing",
//     amount: 8799,
//     title: "Women Handbag Black",
//     image: "/images/3.webp",
//   },
//   {
//     id: "#1026",
//     customer: "Sarah Johnson",
//     date: "2025/09/06",
//     status: "Completed",
//     amount: 2200,
//     title: "Longines Master Collection",

//     image: "/images/1.webp",
//   },
//   {
//     id: "#1027",
//     customer: "David Kim",
//     date: "2025/09/06",
//     status: "Cancelled",
//     amount: 11500,
//     title: "Longines Master Collection",

//     image: "/images/3.webp",
//   },
//   {
//     id: "#1028",
//     customer: "David Kim",
//     date: "2025/09/06",
//     status: "Cancelled",
//     amount: 11500,
//     title: "Longines Master Collection",

//     image: "/images/3.webp",
//   },
//   {
//     id: "#1029",
//     customer: "David Kim",
//     date: "2025/09/06",
//     status: "Cancelled",
//     amount: 11500,
//     title: "Longines Master Collection",

//     image: "/images/3.webp",
//   },
//   {
//     id: "#1030",
//     customer: "David Kim",
//     date: "2025/09/06",
//     status: "Cancelled",
//     amount: 11500,
//     title: "Longines Master Collection",

//     image: "/images/3.webp",
//   },
//   {
//     id: "#1031",
//     customer: "David Kim",
//     date: "2025/09/06",
//     status: "Cancelled",
//     amount: 11500,
//     title: "Longines Master Collection",

//     image: "/images/3.webp",
//   },
// ];
