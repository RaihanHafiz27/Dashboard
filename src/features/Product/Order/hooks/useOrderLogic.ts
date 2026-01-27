import { statusColors } from "@/data/statusColors";
import { useClickOutside } from "@/hooks/useClickOutside";
import { updateOrderStatus } from "@/store/ordersSlice";
import { AppDispatch, RootState } from "@/store/store";
import { OrderStatus } from "@/types/order.type";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ITEMS_PER_PAGE = 7;

export const useOrderLogic = () => {
  // UI State & Ref
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useClickOutside(() => setIsOpen(false));
  const [currentPage, setCurrentPage] = useState(1);

  // Redux State
  const orders = useSelector((state: RootState) => state.orders.data);
  const dispatch = useDispatch<AppDispatch>();

  // Logic Pagination
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const currentTableData = orders.slice(firstItemIndex, lastItemIndex);

  // Handler
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };

  return {
    isOpen,
    setIsOpen,
    menuRef,
    tableData: currentTableData,
    statusColors,
    currentPage,
    totalPages,
    handlePagination,
    handleStatusUpdate,
  };
};
