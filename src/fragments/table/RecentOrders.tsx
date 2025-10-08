import { LabelButton } from "../button/LabelButton";
import { recentOrders, statusColors } from "@/data/recentOrders";
import { Avatar } from "../profile/Avatar";
import Image from "next/image";

export const RecentOrders = () => {
  return (
    <div className="flex flex-col bg-slate-50 col-span-2 space-y-2 rounded-sm overflow-hidden">
      <LabelButton title="Recent Orders" type="ellipsis" />
      <table className="grow overflow-hidden m-2 table-auto">
        <thead className="border-b border-gray-300">
          <tr className="text-gray-700 tracking-wide text-sm">
            <th className="p-3 ">ID</th>
            <th className="p-3 ">Product</th>
            <th className="p-3 ">Customer</th>
            <th className="p-3 ">Date</th>
            <th className="p-3 ">Status</th>
            <th className="p-3 ">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 text-sm">
          {recentOrders.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-200  transition-all duration-200 text-gray-700"
            >
              <td className="p-3 font-medium ">{item.id}</td>
              <td className="p-3">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-800/50">
                    <Image
                      src={item.image} // Sebaiknya gunakan item.product.imageUrl
                      height={40}
                      width={40}
                      alt={item.id}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold " title={item.title}>
                      {/* {item.title} */}
                      {item.title.substring(0, 15)}...
                    </p>
                    <p className="text-xs text-gray-600">lorem</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center space-x-3">
                  <Avatar name={item.customer} />
                  <p className="truncate font-medium text-gray-700">
                    {item.customer}
                  </p>
                </div>
              </td>
              <td className="p-3 text-gray-600 text-center">{item.date}</td>

              <td className="p-3">
                <div className="flex justify-center">
                  <span
                    className={`rounded-sm px-3 py-2 text-xs font-semibold leading-tight ${
                      statusColors[item.status] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </td>
              <td className="p-3 font-semibold text-gray-700 text-center">
                $ {item.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
