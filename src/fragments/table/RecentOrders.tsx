import { LabelButton } from "../button/LabelButton";
import { recentOrders, statusColors } from "@/data/recentOrders";
import { Avatar } from "../profile/Avatar";

export const RecentOrders = () => {
  return (
    <div className="flex flex-col bg-slate-50 col-span-2 space-y-2 rounded-sm overflow-hidden">
      <LabelButton label="Recent Orders" />
      <table className="grow overflow-hidden m-2 table-auto">
        <thead className="">
          <tr className="text-gray-700 tracking-wide ">
            <th className="pb-2">ID</th>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {recentOrders.map((item) => (
            <tr
              key={item.id}
              className=" text-gray-700  hover:scale-105 transition-all duration-300 text-sm"
            >
              <td className=" p-2   text-center">{item.id}</td>
              <td
                className=" py-2 flex items-center justify-center"
                title={item.customer}
              >
                <div className="flex items-center w-3/4 space-x-2">
                  <Avatar name={item.customer} />
                  <p className="truncate">{item.customer.substring(0, 15)}</p>
                </div>
              </td>
              <td className=" py-2  text-center">{item.date}</td>
              <td className="">
                <p
                  className={` py-2 rounded-sm text-center ${
                    statusColors[item.status]
                  }`}
                >
                  {item.status}
                </p>
              </td>
              <td className=" py-2 text-center ">$ {item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
