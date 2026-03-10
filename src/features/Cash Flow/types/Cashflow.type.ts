import { CreditCardProps } from "../components/card/CreditCard";

export type Variant = "success" | "danger" | "primary" | "warning";

export type Icon = "income" | "epense" | "profit" | "growth";

export interface FinancialSummaryItem {
  id: string;
  label: string;
  value: number;
  change: number;
  isUp: boolean;
  icon: Icon;
  variant: Variant;
  description: string;
}

export type StatusTransaction = "completed" | "pending" | "processing";

export interface Transactions {
  transaction_id: string;
  type: string;
  date: string;
  amount: number;
  description: string;
  status: StatusTransaction;
  displayDate?: string;
}
