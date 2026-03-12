import {
  StatusTransaction,
  Transactions,
} from "@/features/Cash Flow/types/Cashflow.type";

const dates = [
  "2026-03-12T14:30:00.000Z",
  "2026-03-12T09:15:00.000Z",
  "2026-03-11T22:45:00.000Z",
  "2026-03-11T15:20:00.000Z",
  "2026-03-11T08:05:00.000Z",
  "2026-03-10T20:30:00.000Z",
  "2026-03-10T11:15:00.000Z",
  "2026-03-09T23:50:00.000Z",
  "2026-03-09T14:40:00.000Z",
  "2026-03-08T19:10:00.000Z",
  "2026-03-08T07:25:00.000Z",
  "2026-03-07T21:00:00.000Z",
  "2026-03-07T12:35:00.000Z",
  "2026-03-06T18:55:00.000Z",
  "2026-03-05T10:20:00.000Z",
];

const balance = [1100, 1289, 765, 12000, 4023, 90];

const descs = [
  "Order Payment #INV-20260312-001 - Electronics",
  "Marketing Ads - Facebook & Instagram Campaigns",
  "Shipping Fee Settlement - J&T Express",
  "Order Payment #INV-20260311-042 - Fashion",
  "Warehouse Monthly Rental - Blok B2",
  "Customer Refund #ORD-88210 - Defective Item",
  "Wholesale Order #WS-2026-005 - Reseller Bali",
  "AWS Cloud Infrastructure - Monthly Hosting",
];

const statues: StatusTransaction[] = [
  "processing",
  "pending",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
  "completed",
];

const generateDummyDataTransaction = () => {
  const transactions: Transactions[] = [];

  const totalItems = 14;

  for (let i = 0; i <= totalItems; i++) {
    const idNumber = 1001 + (totalItems - 1) - i;

    transactions.push({
      transaction_id: `TRX${idNumber}`,
      type: i % 3 === 0 ? "income" : "expense",
      date: dates[i],
      amount: balance[i % balance.length],
      description: descs[i % descs.length],
      status: statues[i],
    });
  }

  return transactions;
};

export const dummyTransactions = generateDummyDataTransaction();
