import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { StatusTransaction, Transactions } from "../../types/Cashflow.type";

export const CashFlowTable = ({ data }: { data: Transactions[] }) => {
  const statuses: Record<StatusTransaction, string> = {
    completed: "bg-green-200 text-green-600 dark:bg-green-900/40",
    pending: "bg-amber-100 text-amber-500 dark:bg-amber-900/40",
    processing: "bg-blue-200 text-blue-500 dark:bg-blue-900/40",
  };

  return (
    <div className={`w-full h-[365px] 2xl:h-[385px] overflow-hidden `}>
      <table className="w-full table-fixed overflow-hidden">
        <thead className="border-b border-gray-300 dark:border-gray-500">
          <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-xs lg:text-sm 2xl:text-base font-bold">
            <th className="p-3 w-[15%] min-w-[130px] text-start ">
              Transaction ID
            </th>
            <th className="p-3 w-[12%] min-w-[100px]">Type</th>
            <th className="p-3 w-[15%] min-w-[120px] text-start">Date</th>
            <th className="p-3 w-[15%] min-w-[110px] text-start">Amount</th>
            <th className="p-3 max-w-0 text-start">Description</th>
            <th className="p-3 w-[15%] min-w-[90px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.transaction_id}
              className="group hover:scale-101 transition-all duration-200 hover:bg-slate-500/5 dark:hover:bg-gray-800/30"
            >
              <td className="px-3 py-4 text-sm 2xl:text-base">
                <span className="flex items-center space-x-2">
                  {item.type === "expense" ? (
                    <CircleArrowDown strokeWidth={1} className="text-red-500" />
                  ) : (
                    <CircleArrowUp strokeWidth={1} className="text-green-600" />
                  )}
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.transaction_id}
                  </p>
                </span>
              </td>
              <td className="px-3 py-4 text-sm 2xl:text-base text-center capitalize text-gray-700 dark:text-gray-300">
                {item.type}
              </td>
              <td className="px-3 py-4 text-sm 2xl:text-base text-gray-700 dark:text-gray-300">
                {item.displayDate}
              </td>
              <td
                className={`px-3 py-4 text-sm 2xl:text-base ${item.type === "expense" ? "text-red-500" : "text-green-600"}`}
              >
                $ {item.amount.toLocaleString("en-US")}
              </td>
              <td
                className="px-3 py-4 text-sm 2xl:text-base text-gray-700 dark:text-gray-300 truncate"
                title={item.description}
              >
                {item.description}
              </td>
              <td className="px-3 py-4 text-xs 2xl:text-sm text-center">
                <div
                  className={`${statuses[item.status]} w-full p-2 rounded-sm font-bold capitalize`}
                >
                  {item.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
