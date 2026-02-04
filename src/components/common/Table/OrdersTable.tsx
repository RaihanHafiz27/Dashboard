import { statusColors } from "@/data/statusColors";
import { Order } from "@/types/order.type";
import { Inbox } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface OrderTableProps {
  data: Order[];
  renderStatus?: (item: Order) => ReactNode;
  onRowClick?: (item: Order) => void;
  minRows?: number; // only for table orders page
}

export const OrdersTable = ({
  data,
  renderStatus,
  onRowClick,
  minRows = 0,
}: OrderTableProps) => {
  // Logic: If minRows is 7, but there are only 2 rows of data, then 5 empty rows are needed.
  // Math.max to avoid negative values if data > minRows
  const emptyRows = Math.max(0, minRows - data.length);

  return (
    <table className="grow overflow-hidden m-2 table-auto">
      <thead className="border-b border-gray-300 dark:border-gray-500">
        <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-xs lg:text-sm">
          <th className=" pb-2 px-3">ID</th>
          <th className=" pb-2 px-3">Product</th>
          <th className=" pb-2 px-3">Address</th>
          <th className=" pb-2 px-3">Amount</th>
          <th className=" pb-2 px-3">Status</th>
          <th className=" pb-2 px-3">Date</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-none text-sm">
        {data.length === 0 ? (
          <tr>
            <td colSpan={6} className="p-0 border-none">
              <div
                // 73 is height each row data on the table
                style={{
                  height: minRows > 0 ? `${minRows * 73}px` : "auto",
                }}
                className="w-full flex flex-col justify-center items-center text-gray-400 gap-2 bg-slate-50/50 dark:bg-slate-800/10"
              >
                <Inbox size={48} strokeWidth={1} />
                <p className="text-sm font-medium">No orders found</p>
                <p className="text-xs">Try adjusting your filters</p>
              </div>
            </td>
          </tr>
        ) : (
          <>
            {/* ORIGINAL DATA */}
            {data.map((item) => (
              <OrderRow
                item={item}
                key={item.id}
                onRowClick={onRowClick}
                renderStatus={renderStatus}
              />
            ))}
            {/* GHOST ROWS  */}
            {emptyRows > 0 &&
              Array.from({ length: emptyRows }).map((_, index) => (
                <tr key={`empty-${index}`} className="h-[73px]">
                  {/* colSpan = number of header columns */}
                  <td colSpan={6}>&nbsp;</td>
                </tr>
              ))}
          </>
        )}
      </tbody>
    </table>
  );
};

const OrderRow = ({
  item,
  onRowClick,
  renderStatus,
}: {
  item: Order;
  onRowClick?: (item: Order) => void;
  renderStatus?: (item: Order) => ReactNode;
}) => {
  return (
    <tr
      onClick={() => onRowClick && onRowClick(item)} // ONLY FOR RECENT ORDERS
      key={item.id}
      className={`hover:bg-slate-200/50 dark:hover:bg-gray-700/10 ${onRowClick ? "hover:cursor-pointer" : ""} transition-all duration-200 text-gray-700 dark:text-gray-300`}
    >
      {/* ID Column */}
      <td className=" py-3 px-3 text-xs font-medium lg:text-sm text-center">
        {/* small screen */}
        <span className="lg:hidden" title={item.id}>
          {item.id.slice(4, 8)}
        </span>
        {/* large screen */}
        <span className="hidden lg:inline w-auto truncate" title={item.id}>
          {item.id}
        </span>
      </td>
      {/* Product Column */}
      <td className=" py-3 px-3">
        <div className=" flex items-center w-full space-x-4">
          <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-800/50 dark:bg-sky-700">
            <Image
              src={item.imageUrl}
              height={40}
              width={40}
              alt={item.productName}
              className="h-10 w-10 rounded-md object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 max-w-[150px] 2xl:max-w-[200px] text-xs lg:text-sm lg:space-y-1.5">
            <p
              className="w-full truncate font-medium text-gray-700 dark:text-gray-300"
              title={item.productName}
            >
              {item.productName}
              {/* {item.productName.substring(0, 10)}... */}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {/* small screen */}
              <span className="lg:hidden">Qty : </span>
              {/* large screen */}
              <span className="hidden lg:inline">Quantity : </span>
              {item.quantity}
            </p>
          </div>
        </div>
      </td>
      {/* Address Column */}
      <td className=" py-3 px-3">
        <div
          className="flex-1 truncate w-full max-w-[150px] lg:max-w-[200px] 2xl:max-w-[250px] text-xs font-medium text-gray-700 dark:text-gray-300 lg:text-sm mx-auto"
          title={item.customerAddress}
        >
          {item.customerAddress}
        </div>
      </td>

      {/* Amount Column */}
      <td className=" p-3 text-gray-700 dark:text-gray-300 text-center text-xs lg:text-sm">
        $ {item.amount}
      </td>
      {/* Status Column */}
      <td className=" py-3 px-3">
        {renderStatus ? (
          // CAN EDITS
          renderStatus(item)
        ) : (
          // ONLY VIEWS
          <div className="flex justify-center">
            <span
              className={`rounded-sm w-full text-center px-3 py-2 text-xs font-semibold leading-tight ${
                statusColors[item.status] || "bg-gray-100 text-gray-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        )}
      </td>
      {/* Date Column */}
      <td className=" py-3 px-3 text-gray-700 dark:text-gray-300 text-center text-xs lg:text-sm">
        {item.date}
      </td>
    </tr>
  );
};
