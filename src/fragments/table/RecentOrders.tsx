import { LabelButton } from "../button/LabelButton";
import { statusColors } from "@/data/recentOrders";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const RecentOrders = () => {
  const router = useRouter();
  const orders = useSelector((state: RootState) => state.orders.data);

  const recentOrders = orders.slice(0, 5);

  console.log(router);

  return (
    <div className="flex flex-col bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md col-span-2 space-y-2 rounded-sm overflow-hidden">
      <LabelButton title="Recent Orders" type="ellipsis" />
      <table className="grow overflow-hidden m-2 table-auto">
        <thead className="border-b border-gray-300 dark:border-gray-500">
          <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-sm">
            <th className="p-3 ">ID</th>
            <th className="p-3 ">Product</th>
            <th className="p-3 ">Address</th>
            <th className="p-3 ">Date</th>
            <th className="p-3 ">Amount</th>
            <th className="p-3 ">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-gray-500 text-sm">
          {recentOrders.map((item) => (
            <tr
              onClick={() => router.push("/product/orders")}
              key={item.id}
              className="hover:bg-gray-200 dark:hover:bg-gray-700/10 hover:cursor-pointer  transition-all duration-200 text-gray-700 dark:text-gray-300"
            >
              <td className="p-3 font-medium ">{item.id}</td>
              <td className="p-3">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-800/50">
                    <Image
                      src={item.imageUrl} // Sebaiknya gunakan item.product.imageUrl
                      height={40}
                      width={40}
                      alt={item.id}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold" title={item.productName}>
                      {item?.productName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Quantity : {item?.quantity}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                {/* <div className="flex items-center space-x-3">
                  <Avatar name={item.customerName} />
                  <p className="truncate font-medium text-gray-700">
                    {item.customerName}
                  </p>
                </div> */}
                <p className="truncate font-medium text-gray-700 dark:text-gray-300">
                  {item.customerAddress}
                </p>
              </td>
              <td className="p-3 text-gray-700 dark:text-gray-300 text-center">
                {item.date}
              </td>

              <td className="p-3 font-semibold text-gray-700 dark:text-gray-300 text-center">
                $ {item.amount}
              </td>
              <td className="p-3">
                <div className="flex justify-center">
                  <span
                    className={`rounded-sm w-full text-center px-3 py-2 text-xs font-semibold leading-tight ${
                      statusColors[item.status] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
