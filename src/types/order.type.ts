export type OrderStatus = "Pending" | "Completed" | "Processing" | "Cancelled";

export interface Order {
  id: string;
  customerAddress: string;
  status: OrderStatus;
  productName: string;
  date: string;
  amount: number;
  imageUrl: string;
  quantity: number;
}
