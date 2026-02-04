import { statusColors } from "@/data/statusColors";
import { updateOrderStatus } from "@/store/ordersSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Order, OrderStatus } from "@/types/order.type";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "./usePagination";

const ITEMS_PER_PAGE = 7;

export const useOrderLogic = () => {
  // Redux State
  const orders = useSelector((state: RootState) => state.orders.data);
  const dispatch = useDispatch<AppDispatch>();

  const [statusFiltered, setStatusFiltered] = useState<string | OrderStatus>(
    "All",
  );
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return orders.filter((item) => {
      // Logic Search by ID or Address
      const queryLower = search.toLowerCase();
      const queryMatch = search
        ? item.id.toLowerCase().includes(queryLower) ||
          item.customerAddress.toLowerCase().includes(queryLower)
        : true;

      // Logic Status
      const statusMatch =
        statusFiltered && statusFiltered !== "All"
          ? item.status === statusFiltered
          : true;

      return queryMatch && statusMatch;
    });
  }, [orders, search, statusFiltered]);

  const { currentData, currentPage, totalPages, goToPage } = usePagination(
    filteredData,
    ITEMS_PER_PAGE,
  );

  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };

  return {
    // The Data
    tableData: currentData,
    statusColors,

    // Pagination Controls
    currentPage,
    totalPages,
    handlePagination: goToPage,

    // Filter Controls
    statusFiltered,
    setStatusFiltered,

    // Searching Control
    search,
    setSearch,

    // Action
    handleStatusUpdate,
  };
};
