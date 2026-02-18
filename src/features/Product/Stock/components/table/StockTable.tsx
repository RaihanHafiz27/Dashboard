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
    <div className="flex flex-col h-[660px] 2xl:h-[780px] overflow-hidden">
      <table className="grow overflow-hidden table-auto ">
        <thead className="border-b border-slate-300 dark:border-gray-500  ">
          <tr className="text-gray-700 dark:text-slate-300 tracking-wide text-sm">
            <th className="p-4 text ">Product</th>
            <th className="p-4 text ">Name</th>
            <th className="p-4 text ">Category</th>
            <th className="p-4 text ">Price</th>
            <th className="p-4 text ">Piece</th>
            <th className="p-4 text ">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-none">
          {data?.map((item) => (
            <tr
              key={item.id}
              className="hover:scale-103 transition-all duration-200"
            >
              <td className="p-4  2xl:py-3">
                <div className="w-14 h-14 2xl:w-20 2xl:h-20 bg-sky-800/50 dark:bg-sky-700 grid place-items-center mx-auto rounded-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </td>
              <td className="p-4  2xl:py-3">
                <p
                  className="text-gray-700 dark:text-slate-300 text-xs lg:text-sm"
                  title={`${item.name}`}
                >
                  {item.name.substring(0, 15)}...
                </p>
              </td>
              <td className="p-4  2xl:py-3 capitalize text-gray-700 dark:text-slate-300 text-xs lg:text-sm">
                {item.category}
              </td>
              <td className="p-4  2xl:py-3 text-gray-700 dark:text-slate-300 text-xs lg:text-sm">
                $ {item.price}
              </td>
              <td className="p-4  2xl:py-3 text-gray-700 dark:text-slate-300 text-center text-xs lg:text-sm">
                {item.piece}
              </td>
              <td className="p-4  2xl:py-3">
                <div className="flex justify-center">
                  <div className="flex border border-gray-300 dark:border-gray-600 divide-x divide-gray-300 dark:divide-gray-600 rounded-md overflow-hidden">
                    <button
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Edit"
                    >
                      <SquarePen
                        size={20}
                        className="text-blue-600 dark:text-blue-400 cursor-pointer"
                        onClick={() => onClick(item.id)}
                      />
                    </button>
                    <button
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      title="Delete"
                    >
                      <Trash2
                        size={20}
                        className="text-red-600 dark:text-red-500"
                      />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
