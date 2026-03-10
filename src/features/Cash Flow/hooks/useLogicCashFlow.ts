import { usePagination } from "@/hooks/usePagination";
import { dummyTransactions } from "@/lib/dummyTransaction";
import { useMemo, useState } from "react";
import { formattedDate } from "../utils/formattedDate";

export const useLogicCashFLow = () => {
  const [filterTransaction, setFilterTransaction] =
    useState<string>("all transaction");

  const filteredData = useMemo(() => {
    const filtered = dummyTransactions.filter((item) => {
      const filterMatch =
        filterTransaction && filterTransaction !== "all transaction"
          ? item.type === filterTransaction
          : true;

      return filterMatch;
    });

    return filtered.map((item) => ({
      ...item,
      displayDate: formattedDate(item.date), // DATE CONVERSION
    }));
  }, [filterTransaction, dummyTransactions]);

  const { currentData, currentPage, totalPages, goToPage } = usePagination(
    filteredData,
    5,
  );

  return {
    // STATE ACTION
    filterTransaction,
    setFilterTransaction,

    // THE DATA
    currentData,

    // PAGINATION ACTION
    currentPage,
    totalPages,
    handlePagination: goToPage,
  };
};
