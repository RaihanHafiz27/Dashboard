import { ButtonEdit } from "@/components/ui/Button/ButtonEdit";
import { ButtonRemove } from "@/components/ui/Button/ButtonRemove";
import { Stock } from "@/data/stocksProd";
import { PackageSearch, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

interface StockTableProps {
  data: Stock[];
  onClick: (id: number) => void;
}

export const StockTable = (props: StockTableProps) => {
  const { data, onClick } = props;

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[660px] text-gray-400 bg-slate-50/50 dark:bg-slate-900/20 rounded-lg">
        <PackageSearch size={48} strokeWidth={1} className="mb-2 opacity-50" />
        <p className="text-sm font-medium">No stock data available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[75vh] 2xl:h-[80vh]">
      {/* HEADER CONTAINER */}
      <div className="shrink-0 bg-slate-100 dark:bg-gray-900 border-b border-slate-300 dark:border-gray-500 2xl:px-4">
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-gray-700 dark:text-slate-300">
              <th className="w-[30%] p-4 text-start text-xs  uppercase font-bold">
                Product
              </th>
              <th className="w-[20%] p-4 text-start text-xs  uppercase font-bold">
                Category
              </th>
              <th className="w-[15%] p-4 text-start text-xs  uppercase font-bold">
                Price
              </th>
              <th className="w-[15%] p-4 text-center text-xs  uppercase font-bold">
                Piece
              </th>
              <th className="w-[20%] p-4 text-center text-xs  uppercase font-bold">
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>
      {/* BODY CONTAINER (Scrollable) */}
      <div className="grow overflow-y-auto overflow-x-hidden 2xl:px-4">
        <table className="w-full table-fixed border-separate border-spacing-0">
          <tbody className="">
            {data?.map((item) => (
              <tr
                key={item.id}
                className="group hover:scale-103 transition-all duration-200 hover:bg-slate-500/5 dark:hover:bg-gray-800/30"
              >
                <td className="w-[30%] p-4 2xl:py-3">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="relative w-14 h-14 2xl:w-20 2xl:h-20 bg-sky-800/50 dark:bg-sky-700 grid place-items-center rounded-md shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1 2xl:space-y-3 flex-1 min-w-0">
                      <p
                        className="text-gray-700 dark:text-slate-300 text-sm truncate"
                        title={`${item.name}`}
                      >
                        {item.name}
                      </p>
                      <span className="text-xs 2xl:text-sm text-gray-400">
                        ID: #{item.id}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="w-[20%] p-4">
                  <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full bg-slate-300 dark:bg-gray-800 text-gray-500 dark:text-slate-300 border border-slate-200 dark:border-gray-700">
                    {item.category}
                  </span>
                </td>
                <td className="w-[15%] p-4 2xl:py-3 text-gray-700 dark:text-slate-300 text-sm font-medium">
                  $ {item.price.toLocaleString()}
                </td>
                <td
                  className={`w-[15%] p-4 2xl:py-3 text-gray-700 dark:text-slate-300 text-center text-xs font-bold ${item.piece < 15 ? "text-red-500" : "text-gray-700 dark:text-slate-300"}`}
                >
                  {item.piece}
                </td>
                <td className="w-[20%] p-4 2xl:py-3">
                  <div className="flex justify-center space-x-2">
                    <ButtonEdit onClick={() => onClick(item.id)} />
                    <ButtonRemove />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
