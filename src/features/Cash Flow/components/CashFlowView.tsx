import { CashFlowCard } from "./card/CashFlowCard";
import { CashFlow } from "../types/Cashflow.type";
import { CreditCard } from "./card/CreditCard";
import { useState } from "react";
import { motion } from "motion/react";
import { CircleArrowDown, CircleArrowUp, Printer, Send } from "lucide-react";
import { dummyTransactions } from "@/lib/dummyTransaction";

interface FilterTransaction {
  id: number;
  title: string;
}

const data: FilterTransaction[] = [
  {
    id: 1,
    title: "all transaction",
  },
  {
    id: 2,
    title: "income",
  },
  {
    id: 3,
    title: "expense",
  },
];

export type StatusTransaction = "completed" | "pending" | "processing";

export interface Transactions {
  transaction_id: string;
  type: string;
  date: string;
  amount: number;
  description: string;
  status: StatusTransaction;
}

export const CashFlowView = ({ cashFlow }: { cashFlow: CashFlow }) => {
  const [state, setState] = useState<string>("all transaction");

  const formattedDate = (date: string) => {
    const d = new Date(date);

    const datePart = d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    const timePart = d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${datePart}, ${timePart}`;
  };

  const statuses: Record<StatusTransaction, string> = {
    completed: "bg-green-200 text-green-600 dark:bg-green-900/40",
    pending: "bg-amber-100 text-amber-500",
    processing: "bg-blue-200 text-blue-500",
  };

  console.log(dummyTransactions);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Credit Card */}
        <CreditCard {...cashFlow.credit_card} />
        {/* Cash Flow Card */}
        <CashFlowCard data={cashFlow.financial_summary} />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-700 tracking-wide">
          Recent Transactions
        </h3>
        <div className="flex items-center justify-between border-b border-gray-300">
          <ul className="flex space-x-16">
            {data.map((val) => (
              <li
                key={val.id}
                onClick={() => setState(val.title)}
                className={`relative capitalize text-sm p-2 z-10 cursor-pointer transition-colors duration-300 ${
                  state === val.title ? "text-blue-500" : "text-gray-700"
                }`}
              >
                {val.title}

                {/* active border */}
                {state === val.title && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="space-x-3 flex items-center">
            <button className="bg-gray-200/50 p-2 text-slate-200 border border-gray-300 rounded-md group hover:scale-110 transition-transform duration-200 cursor-pointer">
              <Printer
                size={20}
                fill="#364153"
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </button>
            <button
              disabled
              className="bg-blue-500 p-2 text-sm rounded-md text-slate-200 cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full space-y-6 p-4 h-[60vh] overflow-hidden rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md `}
      >
        <table className="w-full table-fixed overflow-hidden">
          <thead className="border-b border-gray-300 dark:border-gray-500">
            <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-xs lg:text-sm font-bold">
              <th className="p-3 w-[15%] text-start ">Transaction ID</th>
              <th className="p-3 w-[15%] ">Type</th>
              <th className="p-3 w-[15%] text-start ">Date</th>
              <th className="p-3 w-[15%]  text-start ">Amount</th>
              <th className="p-3 w-[25%] text-start ">Description</th>
              <th className="p-3 w-[15%] ">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyTransactions.map((item) => (
              <tr
                key={item.transaction_id}
                className="group hover:scale-103 transition-all duration-200 hover:bg-slate-500/5 dark:hover:bg-gray-800/30"
              >
                <td className="px-3 py-4 text-sm w-[15%]">
                  <span className="flex items-center space-x-2">
                    {item.type === "expense" ? (
                      <CircleArrowDown
                        strokeWidth={1}
                        className="text-red-500"
                      />
                    ) : (
                      <CircleArrowUp
                        strokeWidth={1}
                        className="text-green-600"
                      />
                    )}
                    <p>{item.transaction_id}</p>
                  </span>
                </td>
                <td className="px-3 py-4 text-sm text-center capitalize w-[15%]">
                  {item.type}
                </td>
                <td className="px-3 py-4 text-sm w-[15%]">
                  {formattedDate(item.date)}
                </td>
                <td
                  className={`px-3 py-4 text-sm ${item.type === "expense" ? "text-red-500" : "text-green-600"}`}
                >
                  $ {item.amount.toLocaleString("en-US")}
                </td>
                <td
                  className="px-3 py-4 text-sm w-[25%] truncate"
                  title={item.description}
                >
                  {item.description}
                </td>
                <td className="px-3 py-4 text-xs w-[15%] text-center">
                  <div
                    className={`${statuses[item.status]} w-full p-2 rounded-sm font-bold capitalize`}
                  >
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
