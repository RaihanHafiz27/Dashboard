import { ReactNode } from "react";
import { FinancialSummaryItem, Icon, Variant } from "../../types/Cashflow.type";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  TrendingUp,
  Wallet,
} from "lucide-react";
import CountUp from "react-countup";

export const CashFlowCard = ({ data }: { data: FinancialSummaryItem[] }) => {
  const iconColor: Record<Variant, string> = {
    primary: "bg-sky-200 text-sky-600 dark:bg-sky-900/40",
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
              <p className="text-gray-400 text-[10px] 2xl:text-xs font-bold uppercase tracking-widest">
                {item.label}
              </p>
              <div className="space-y-1">
                <h3 className="text-gray-700 dark:text-slate-200 text-xl 2xl:text-2xl font-bold space-x-1">
                  {item.id !== "stat-4" && <span>$</span>}
                  <CountUp start={0} end={item.value} duration={5} />
                  {item.id === "stat-4" && "%"}
                </h3>
                {/* TREND INDICATOR */}
                <div className="flex items-center text-[10px] 2xl:text-xs">
                  <span
                    className={`flex items-center font-bold px-1.5 rounded-full space-x-1 ${item.isUp ? "bg-green-100 text-green-600 dark:bg-green-900/30" : "bg-red-100 text-red-600 dark:bg-red-900/30"}`}
                  >
                    <p>{item.isUp ? "↑" : "↓"}</p>
                    <span className="flex items-center">
                      <CountUp start={0} end={item.change} duration={2} />
                      <p>%</p>
                    </span>
                  </span>
                  <span className=" text-gray-400 font-medium">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`w-12 h-12 2xl:w-14 2xl:h-14 rounded-2xl grid place-items-center transition-transform group-hover:rotate-12 duration-300 ${iconColor[item.variant]}`}
            >
              {iconMap[item.icon]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
