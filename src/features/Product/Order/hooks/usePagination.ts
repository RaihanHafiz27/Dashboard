import { Order } from "@/types/order.type";
import { useEffect, useState } from "react";

export const usePagination = (data: Order[], itemsPerPage: number) => {
  // UI State
  const [currentPage, setCurrentPage] = useState(1);

  // Logic Pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = currentPage * itemsPerPage;
  const currentData = data.slice(firstItemIndex, lastItemIndex);

  const goToPage = (page: number) => {
    // Validation so it doesn't jump to page -1 or page 9999
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset page to 1 if data changes drastically (e.g., after filtering)
  useEffect(() => setCurrentPage(1), [data.length]);

  return {
    currentData,
    currentPage,
    totalPages,
    goToPage,
  };
};
