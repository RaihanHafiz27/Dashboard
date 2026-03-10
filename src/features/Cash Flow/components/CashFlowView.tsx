import { CashFlowCard } from "./card/CashFlowCard";
import { CreditCard, CreditCardProps } from "./card/CreditCard";
import { useState } from "react";
import { motion } from "motion/react";
import { CircleArrowDown, CircleArrowUp, Printer, Send } from "lucide-react";
import { dummyTransactions } from "@/lib/dummyTransaction";
import { Pagination } from "@/components/common/Pagination/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { FinancialSummaryItem, Transactions } from "../types/Cashflow.type";
import { CashFlowTable } from "./table/CashFlowTable";
import { FilterCashFlow } from "./filter/FilterCashFlow";

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
            <button className="bg-gray-200/50 dark:bg-slate-200 p-2 text-slate-200 border border-gray-300 rounded-md group hover:scale-110 transition-transform duration-200 cursor-pointer">
              <Printer
                size={20}
                fill="#364153"
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </button>
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
