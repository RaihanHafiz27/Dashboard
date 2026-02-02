import { OrdersTable } from "@/components/common/Table/OrdersTable";
import { SearchBar } from "@/components/ui/Input/SearchBar";
import { FilterButton } from "./filter/FilterButton";
import { FilterDropdown } from "./filter/FilterDropdown";
import { Pagination } from "@/fragments/pagination/Pagination";
import { Order, OrderStatus } from "@/types/order.type";
import { StatusDropdown } from "./dropdown/StatusDropdown";

interface OrderViewProps {
  // State UI
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;

  // Table Data
  tableData: Order[];
  statusColors: any;

  // Handlers Logic
  handleStatusUpdate: (id: string, status: OrderStatus) => void;
  handlePagination: (page: number) => void;

  // Pagination State
  currentPage: number;
  totalPages: number;
}

export const OrderView = ({
  isOpen,
  setIsOpen,
  menuRef,
  tableData,
  statusColors,
  handleStatusUpdate,
  handlePagination,
  currentPage,
  totalPages,
}: OrderViewProps) => {
  return (
    <div className="w-full space-y-4 bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md p-4 rounded-sm relative">
      <div className="flex justify-between items-center pt-2">
        <h3 className="text-xl text-gray-700 dark:text-gray-300">All Orders</h3>
        <div ref={menuRef} className="grid grid-cols-2 gap-x-2">
          <SearchBar isFull={true} />
          <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <FilterDropdown isOpen={isOpen} />
      </div>
      {/* tabel */}
      <div className="flex flex-col h-[600px] lg:h-[555px] 2xl:h-[650px] space-y-2  overflow-hidden">
        <OrdersTable
          data={tableData}
          renderStatus={(item) => (
            <StatusDropdown
              id={item.id}
              status={item.status}
              color={statusColors}
              onClick={handleStatusUpdate}
            />
          )}
        />
      </div>
      {/* pagination */}
      <div className=" flex justify-between items-center pb-2">
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Showing data 1 to 7 of 256K entries
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};
