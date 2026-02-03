import { statusColors } from "@/data/statusColors";
import { updateOrderStatus } from "@/store/ordersSlice";
import { AppDispatch, RootState } from "@/store/store";
import { OrderStatus } from "@/types/order.type";
import { useMemo, useState } from "react";
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

  const filteredOrders = useMemo(() => {
    if (statusFiltered === "All") return orders;
    return orders.filter((item) => item.status === statusFiltered);
  }, [orders, statusFiltered]);

  const { currentData, currentPage, totalPages, goToPage } = usePagination(
    filteredOrders,
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

    // Action
    handleStatusUpdate,
  };
};
