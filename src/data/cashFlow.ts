import { CashFlow } from "@/features/Cash Flow/types/Cashflow.type";

export const cashFlow: CashFlow = {
  credit_card: {
    balance: 12450.85,
    card_holder: "Grace Muller",
    card_number: "**** **** **** 4582",
    expiry_date: "12/28",
    card_type: "Visa Gold",
    bank_name: "Abc Bank",
  },
  financial_summary: [
    {
      id: "stat-1",
      label: "Total Income",
      value: 8200.0,
      change: 12.5,
      isUp: true,
      icon: "income",
      variant: "success",
      description: "vs last month",
    },
    {
      id: "stat-2",
      label: "Total Expense",
      value: 3150.0,
      change: 5.2,
      isUp: false,
      icon: "epense",
      variant: "danger",
      description: "vs last month",
    },
    {
      id: "stat-3",
      label: "Net Profit",
      value: 5050.0,
      change: 8.4,
      isUp: true,
      icon: "profit",
      variant: "primary",
      description: "Pure earnings",
    },
    {
      id: "stat-4",
      label: "Growth Indicator",
      value: 18.2,
      change: 2.1,
      isUp: true,
      icon: "growth",
      variant: "warning",
      description: "Annual projection",
    },
  ],
};
