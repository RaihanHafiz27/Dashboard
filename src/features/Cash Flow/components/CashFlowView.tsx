import { CashFlowCard } from "./card/CashFlowCard";
import { CreditCard, CreditCardProps } from "./card/CreditCard";
import { Send } from "lucide-react";
import { dummyTransactions } from "@/lib/dummyTransaction";
import { Pagination } from "@/components/common/Pagination/Pagination";
import { FinancialSummaryItem, Transactions } from "../types/Cashflow.type";
import { CashFlowTable } from "./table/CashFlowTable";
import { FilterCashFlow } from "./filter/FilterCashFlow";
import dynamic from "next/dynamic";

export interface CashFlowCard {
  credit_card: CreditCardProps;
  financial_summary: FinancialSummaryItem[];
}

interface CashFlowProps {
  // CASH FLOW DATA CARD
  cashFlow: CashFlowCard;

  // FILTER STATE
  filterTransaction: string;
  setFilterTransaction: (val: string) => void;

  // DATA TABLE
  currentData: Transactions[];

  // PAGINATION ACTION
  currentPage: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

const CashFlowReportAction = dynamic(
  () =>
    import("./pdf/CashFlowReportAction").then(
      (mod) => mod.CashFlowReportAction,
    ),
  { ssr: false },
);

export const CashFlowView = (props: CashFlowProps) => {
  const {
    cashFlow,
    filterTransaction,
    setFilterTransaction,
    currentData,
    currentPage,
    totalPages,
    handlePagination,
  } = props;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {/* CREDIT CARD */}
        <CreditCard {...cashFlow.credit_card} />
        {/* CASH FLOW CARD */}
        <CashFlowCard data={cashFlow.financial_summary} />
      </div>
      {/* FILTER TABLE */}
      <FilterCashFlow
        onClick={setFilterTransaction}
        onClickValue={filterTransaction}
      />
      {/* TABLE CONTAINER */}
      <div className="w-full space-y-4 p-4 2xl:p-6 rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md ">
        {/* CASH FLOW TABLE */}
        <CashFlowTable data={currentData} />
        {/* TABLE ACTION */}
        <div className="flex items-center justify-between px-2">
          <div className="space-x-3 flex items-center">
            {/* PDF ACTION */}
            <CashFlowReportAction data={dummyTransactions} />
            <button
              disabled
              className="bg-sky-600 p-2 text-sm rounded-md text-slate-200 cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        </div>
      </div>
    </div>
  );
};
