import { LabelButton } from "../button/LabelButton";
import { statusColors } from "@/data/recentOrders";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";

export const RecentOrders = () => {
  const router = useRouter();
  const orders = useSelector((state: RootState) => state.orders.data);
  const [isSupported, setIsSupported] = useState(false);

  const recentOrders = orders.slice(0, 5);

  useEffect(() => {
    const handleResize = () => {
      setIsSupported(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(router);
  console.log(recentOrders);

  return (
    <div className=" flex flex-col bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md col-span-2 space-y-2 rounded-sm overflow-hidden">
      <LabelButton title="Recent Orders" type="ellipsis" />
      <table className="grow overflow-hidden m-2 table-auto">
        <thead className="border-b border-gray-300 dark:border-gray-500">
          <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-xs lg:text-sm">
            <th className="p-3 ">ID</th>
            <th className="p-3 ">Product</th>
            <th className="p-3 ">Address</th>
            <th className="p-3 ">Date</th>
            <th className="p-3 ">Amount</th>
            <th className="p-3 ">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-none text-sm">
          {recentOrders.map((item) => (
            <tr
              onClick={() => router.push("/product/orders")}
              key={item.id}
              className="hover:bg-gray-200 dark:hover:bg-gray-700/10 hover:cursor-pointer  transition-all duration-200 text-gray-700 dark:text-gray-300"
            >
              <td className="p-3 font-medium text-xs lg:text-sm">
                {/* {item.id} */}
                {isSupported ? item.id : item.id.slice(4, 8)}
              </td>
              <td className="p-3">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-800/50 dark:bg-sky-700">
                    <Image
                      src={item.imageUrl}
                      height={40}
                      width={40}
                      alt={item.id}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </div>
                  <div className="text-xs lg:text-sm">
                    <p className="font-semibold" title={item.productName}>
                      {/* {item?.productName} */}
                      {isSupported
                        ? item?.productName
                        : item?.productName.slice(0, 6)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {/* Quantity : {item?.quantity} */}
                      {isSupported ? "Quantity : " : "Qty : "}
                      {item?.quantity}
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
                <p className="truncate font-medium text-gray-700 dark:text-gray-300 text-xs lg:text-sm">
                  {/* {item.customerAddress} */}
                  {isSupported
                    ? item.customerAddress
                    : `${item.customerAddress.substring(0, 10)}...`}
                </p>
              </td>
              <td className="p-3 text-gray-700 dark:text-gray-300 text-center text-xs lg:text-sm">
                {item.date}
              </td>

              <td className="p-3 font-semibold text-gray-700 dark:text-gray-300 text-center text-xs lg:text-sm">
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
