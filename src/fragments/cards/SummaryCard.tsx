import { datas } from "@/data/summaryData";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import CountUp from "react-countup";

export const SummaryCard = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 2xl:gap-x-8">
      {datas.map((item) => (
        <div
          key={item.id}
          className="bg-slate-50 rounded-md p-4 shadow-sm  hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg capitalize font-medium text-gray-700">
              {item.title}
            </p>
            <i>{item.icon}</i>
          </div>
          <span className="flex items-center space-x-2">
            <CountUp
              className="text-2xl font-bold text-gray-700"
              start={0}
              end={item.sum}
              duration={5}
            />
            <div
              className={`flex items-center gap-1 text-xs font-medium mt-1 ${
                item.growth >= 0
                  ? "text-green-500 bg-green-500/20 py-1 px-2 rounded-sm "
                  : "text-red-500 bg-red-500/20 py-1 px-2 rounded-sm "
              }`}
            >
              {item.growth >= 0 ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              <span>{item.growth}%</span>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
