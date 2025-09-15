import {
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Package,
  Users,
  DollarSign,
  Handbag,
  Ellipsis,
  Stars,
  StarsIcon,
  Star,
} from "lucide-react";
import CountUp from "react-countup";
import { MonthlyLine } from "@/fragments/charts/monthlyLine";
import { AnalyticsDonut } from "@/fragments/charts/analyticsDonut";
import { it } from "node:test";
import Image from "next/image";

interface Count {
  id: number;
  title: string;
  sum: number;
  growth: number; // persentase pertumbuhan (+ naik, - turun)
  icon: React.ReactNode;
}

// /data/buyers.ts
export interface BuyerCategory {
  label: string;
  value: number;
}

type OrderStatus = "Pending" | "Completed" | "Processing" | "Cancelled";

interface Order {
  id: string;
  customer: string;
  date: string;
  status: OrderStatus;
  amount: number;
}

interface Top3 {
  id: number;
  title: string;
  price: number;
  img: string;
}

export const top3: Top3[] = [
  {
    id: 1,
    title: "Longines Master Collection",
    price: 1499.99,
    img: "/images/1.webp",
  },
  {
    id: 2,
    title: "iPad Mini 2021 Starlight",
    price: 499.99,

    img: "/images/2.webp",
  },
  {
    id: 3,
    title: "Women Handbag Black",
    price: 59.99,

    img: "/images/3.webp",
  },
];

export const recentOrders: Order[] = [
  {
    id: "#1023",
    customer: "John Doe",
    date: "2025-09-08",
    status: "Completed",
    amount: 320000,
  },
  {
    id: "#1024",
    customer: "Jane Smith",
    date: "2025-09-07",
    status: "Pending",
    amount: 150000,
  },
  {
    id: "#1025",
    customer: "Michael Lee",
    date: "2025-09-07",
    status: "Processing",
    amount: 87000,
  },
  {
    id: "#1026",
    customer: "Sarah Johnson",
    date: "2025-09-06",
    status: "Completed",
    amount: 220000,
  },
  {
    id: "#1027",
    customer: "David Kim",
    date: "2025-09-06",
    status: "Cancelled",
    amount: 105000,
  },
];

export const buyerData: BuyerCategory[] = [
  { label: "Remaja (13-19)", value: 350 },
  { label: "Dewasa (20-40)", value: 780 },
  { label: "Tua (41+)", value: 220 },
];

const datas: Count[] = [
  {
    id: 1,
    title: "new order",
    sum: 127,
    growth: +12,
    icon: <Handbag className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "stock products",
    sum: 390,
    growth: -3,
    icon: <Package className="w-6 h-6 text-purple-600" />,
  },
  {
    id: 3,
    title: "users",
    sum: 1270,
    growth: +8,
    icon: <Users className="w-6 h-6 text-yellow-600" />,
  },
  {
    id: 4,
    title: "sales",
    sum: 5280000,
    growth: 5,
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
  },
];

const DashboardPage = () => {
  const colors: Record<OrderStatus, string> = {
    Pending: "bg-yellow-100 text-yellow-700",
    Processing: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-x-4">
        {datas.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 rounded-md p-4 shadow-sm  hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg capitalize font-medium">{item.title}</p>
              <i>{item.icon}</i>
            </div>
            <span className="flex ">
              <CountUp
                className="text-2xl font-bold"
                start={0}
                end={item.sum}
                duration={5}
              />
              <div
                className={`flex items-center gap-1 text-sm font-medium mt-1 ${
                  item.growth >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.growth >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span>{item.growth}%</span>
              </div>
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <MonthlyLine />
        <AnalyticsDonut />
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="rounded-sm p-3 bg-slate-50 space-y-6">
          <div className="flex justify-between ">
            <h3 className="font-semibold text-gray-600">Recent Orders</h3>
            <button className="cursor-not-allowed" disabled>
              <Ellipsis />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-y-8">
            {top3.map((prod) => (
              <div key={prod.id} className="flex items-center border space-x-2">
                <div className="relative bg-sky-800/50 rounded-sm">
                  <Image
                    src={prod.img}
                    width={100}
                    height={100}
                    alt={prod.title}
                    className="object-cover w-20 h-auto"
                  />
                  <span className="bg-gray-800 text-sm py-1 rounded-sm px-3 text-slate-200 absolute top-0">
                    {prod.id}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="line-clamp-1">{prod.title}</p>
                  <div className="flex ">⭐⭐⭐⭐⭐</div>
                  <p>${prod.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 col-span-2 p-4 rounded-sm space-y-2 h-96 overflow-hidden">
          <div className="flex justify-between ">
            <h3 className="font-semibold text-gray-600">Recent Orders</h3>
            <button className="cursor-not-allowed" disabled>
              <Ellipsis />
            </button>
          </div>
          {/* <div className="w-full space-y-3 h-80 overflow-hidden">
            <div className="border-b-2 border-gray-300 grid grid-cols-[80px_150px_120px_120px_130px] gap-x-2 capitalize text-sm">
              <div className="p-3 text-start font-thin ">id</div>
              <div className="p-3 text-start font-thin ">customer</div>
              <div className="p-3 text-start font-thin ">date</div>
              <div className="p-3 text-start font-thin ">status</div>
              <div className="p-3 text-start font-thin ">total amount</div>
            </div>
            <div className="space-y-2.5  w-full">
              {recentOrders.map((item) => (
                <div
                  key={item.id}
                  className="w-full grid grid-cols-[80px_150px_120px_120px_130px] gap-x-2 text-sm text-gray-700"
                >
                  <div className="p-3 ">{item.id}</div>
                  <div className="p-3 truncate " title={item.customer}>
                    {item.customer}
                  </div>
                  <div className="p-3 ">{item.date}</div>
                  <div className={`p-3  rounded-sm ${colors[item.status]}`}>
                    {item.status}
                  </div>
                  <div className="p-3 ">{item.amount}</div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="table w-full text-sm border-separate border-spacing-y-2.5">
            <div className="table-header-group border-b border-gray-200">
              <div className="table-row">
                <div className="table-cell p-3 ">ID</div>
                <div className="table-cell p-3 ">Customer</div>
                <div className="table-cell p-3 ">Date</div>
                <div className="table-cell p-3 ">Status</div>
                <div className="table-cell p-3 ">Amount</div>
              </div>
            </div>
            <div className="table-row-group ">
              {recentOrders.map((item) => (
                <div key={item.id} className="table-row">
                  <div className="table-cell p-3 ">{item.id}</div>
                  <div
                    className="table-cell p-3  truncate"
                    title={item.customer}
                  >
                    {item.customer.substring(0, 15)}
                  </div>
                  <div className="table-cell p-3 ">{item.date}</div>
                  <div className={`table-cell p-3  ${colors[item.status]}`}>
                    {item.status}
                  </div>
                  <div className="table-cell p-3 ">$ {item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
