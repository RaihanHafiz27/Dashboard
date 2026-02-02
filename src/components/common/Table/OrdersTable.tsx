import { statusColors } from "@/data/statusColors";
import { Order } from "@/types/order.type";
import Image from "next/image";
import { ReactNode } from "react";

interface OrderTableProps {
  data: Order[];
  renderStatus?: (item: Order) => ReactNode;
  onRowClick?: (item: Order) => void;
}

export const OrdersTable = ({
  data,
  renderStatus,
  onRowClick,
}: OrderTableProps) => {
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
        {data.map((item) => (
          <tr
            // ONLY FOR RECENT ORDERS
            onClick={() => onRowClick && onRowClick(item)}
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
              <span
                className="hidden lg:inline w-auto truncate"
                title={item.id}
              >
                {item.id}
              </span>
            </td>
            {/* Product Column */}
            <td className=" py-3 px-3">
              <div className="flex items-center justify-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-800/50 dark:bg-sky-700">
                  <Image
                    src={item.imageUrl}
                    height={40}
                    width={40}
                    alt={item.productName}
                    className="h-10 w-10 rounded-md object-cover"
                  />
                </div>
                <div className="text-xs lg:text-sm lg:space-y-2">
                  <p
                    className=" max-w-[100px] lg:max-w-xs truncate"
                    title={item.productName}
                  >
                    {item.productName}
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
              <p
                className=" text-xs font-medium text-gray-700 truncate dark:text-gray-300 lg:text-sm max-w-[80px] lg:max-w-[200px] mx-auto"
                title={item.customerAddress}
              >
                {item.customerAddress}
              </p>
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
        ))}
      </tbody>
    </table>
  );
};
