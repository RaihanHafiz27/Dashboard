import {
  StatusTransaction,
  Transactions,
} from "@/features/Cash Flow/components/CashFlowView";

const dates = [
  "2026-03-01T13:22:11.000Z",
  "2026-03-01T19:12:11.000Z",
  "2026-03-02T22:15:11.000Z",
  "2026-03-03T00:07:11.000Z",
  "2026-03-05T19:00:11.000Z",
  "2026-03-08T15:19:11.000Z",
];

const balance = [1100, 1289, 765, 120000, 4023, 12090];

const descs = [
  "Freelance project payment",
  "Internet subscription",
  "Electricity bill payment",
  "Client project payment",
  "Weekly grocery shopping",
  "Ride-hailing transportation",
  "Monthly internet subscription",
];

const generateDummyDataTransaction = () => {
  const transactions: Transactions[] = [];

  const statues: StatusTransaction[] = ["completed", "pending", "processing"];

  for (let i = 0; i <= 25; i++) {
    transactions.push({
      transaction_id: `TRX${1000 + i}`,
      type: i % 3 === 0 ? "income" : "expense",
      date: dates[i % dates.length],
      amount: balance[i % balance.length],
      description: descs[i % descs.length],
      status: statues[i % statues.length],
    });
  }

  return transactions;
};

export const dummyTransactions = generateDummyDataTransaction();
