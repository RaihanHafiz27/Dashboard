import { motion } from "motion/react";

const filterType = ["all transaction", "income", "expense"];

interface FilterCashFlowProps {
  onClick: (val: string) => void;
  onClickValue: string;
}

export const FilterCashFlow = (props: FilterCashFlowProps) => {
  const { onClick, onClickValue } = props;

  return (
    <div className="space-y-2 2xl:space-y-3">
      <h3 className="text-xl font-bold text-gray-700 dark:text-slate-200 tracking-wide">
        Recent Transactions
      </h3>
      <ul className="flex space-x-16 border-b border-gray-300 dark:border-gray-500">
        {filterType.map((val, index) => (
          <li
            key={index}
            onClick={() => onClick(val)}
            className={`relative capitalize text-sm p-2 z-10 cursor-pointer transition-all duration-300 hover:scale-105 ${
              onClickValue === val
                ? "text-blue-500"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {val}

            {/* active border */}
            {onClickValue === val && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
