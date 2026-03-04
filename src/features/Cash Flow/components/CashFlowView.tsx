import { CashFlowCard } from "./card/CashFlowCard";
import { CashFlow } from "../types/Cashflow.type";
import { CreditCard } from "./card/CreditCard";

export const CashFlowView = ({ cashFlow }: { cashFlow: CashFlow }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {/* Credit Card */}
        <CreditCard {...cashFlow.credit_card} />
        {/* Cash Flow Card */}
        <CashFlowCard data={cashFlow.financial_summary} />
      </div>
      <div
        className={`w-full space-y-6 p-4 mt-6 rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md `}
      >
        <div>Hello World</div>
      </div>
    </>
  );
};
