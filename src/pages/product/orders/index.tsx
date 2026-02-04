import { OrderView } from "@/features/Product/Order/components/OrderView";
import { useOrderLogic } from "@/features/Product/Order/hooks/useOrderLogic";
import { OrderStatus } from "@/types/order.type";

const productOrders = () => {
  const {
    handlePagination,
    statusFiltered,
    setStatusFiltered,
    search,
    setSearch,
    ...restLogic
  } = useOrderLogic();

  const handleSearchChange = (val: string) => {
    (setSearch(val), handlePagination(1));
  };

  const handleFilterChange = (val: string | OrderStatus) => {
    (setStatusFiltered(val), handlePagination(1));
  };

  return (
    <OrderView
      searchValue={search}
      filterValue={statusFiltered}
      onSearchChange={handleSearchChange}
      onFilterChange={handleFilterChange}
      handlePagination={handlePagination}
      {...restLogic}
    />
  );
};

export default productOrders;
