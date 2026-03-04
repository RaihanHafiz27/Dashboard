import { ReactNode } from "react";
import { FinancialSummaryItem, Icon, Variant } from "../../types/Cashflow.type";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  TrendingUp,
  Wallet,
} from "lucide-react";

export const CashFlowCard = ({ data }: { data: FinancialSummaryItem[] }) => {
  const iconColor: Record<Variant, string> = {
    primary: "bg-blue-200 text-blue-600 dark:bg-blue-900/40",
    danger: "bg-red-200 text-red-600 dark:bg-red-900/40",
    success: "bg-green-200 text-green-600 dark:bg-green-900/40 ",
    warning: "bg-amber-200 text-amber-600 dark:bg-amber-900/40",
  };

  const iconMap: Record<Icon, ReactNode> = {
    income: <BanknoteArrowUp />,
    epense: <BanknoteArrowDown />,
    profit: <Wallet />,
    growth: <TrendingUp />,
  };

  return (
    <div className="col-span-2 grid grid-cols-2 gap-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-slate-100 dark:bg-transparent rounded-md px-4 py-3 shadow-md border border-slate-300 dark:border-gray-500  hover:scale-103 transition-all duration-300 group"
        >
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                {item.label}
              </p>
              <div className="space-y-1">
                <h3 className="text-gray-700 dark:text-slate-200 text-xl font-bold">
                  {item.id === "stat-4"
                    ? `${item.value}%`
                    : `$ ${item.value.toLocaleString("en-US")}`}
                </h3>
                {/* TREND INDICATOR */}
                <div className="flex items-center text-[10px]">
                  <span
                    className={`flex items-center font-bold px-1.5 rounded-full ${item.isUp ? "bg-green-100 text-green-600 dark:bg-green-900/30" : "bg-red-100 text-red-600 dark:bg-red-900/30"}`}
                  >
                    {item.isUp ? "↑" : "↓"} {item.change}%
                  </span>
                  <span className=" text-gray-400 font-medium">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`w-12 h-12 rounded-2xl grid place-items-center transition-transform group-hover:rotate-12 duration-300 ${iconColor[item.variant]}`}
            >
              {iconMap[item.icon]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
