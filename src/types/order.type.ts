export type OrderStatus = "Pending" | "Completed" | "Processing" | "Cancelled";

export interface Order {
  id: string;
  customer: string;
  date: string;
  status: OrderStatus;
  amount: number;
}
