import { Doughnut, Line, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   ArcElement,
// } from "chart.js";

// wajib register element yang dipakai
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   ArcElement
// );

import {
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Package,
  Users,
  DollarSign,
  Handbag,
  Ellipsis,
} from "lucide-react";
import CountUp from "react-countup";
import { MonthlyLine } from "@/fragments/charts/monthlyLine";
import { AnalyticsDonut } from "@/fragments/charts/analyticsDonut";

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
  // const data1 = {
  //   labels: buyerData.map((item) => item.label),
  //   datasets: [
  //     {
  //       label: "Jumlah Pembeli",
  //       data: buyerData.map((item) => item.value),
  //       backgroundColor: [
  //         "rgb(246, 51, 154)",
  //         "rgb(0, 166, 244)",
  //         "rgb(124, 207, 0)",
  //       ],
  //       // borderColor: [
  //       //   "rgba(59, 130, 246, 1)",
  //       //   "rgba(34, 197, 94, 1)",
  //       //   "rgba(239, 68, 68, 1)",
  //       // ],
  //       // borderWidth: 1,
  //     },
  //   ],
  // };

  // const options1 = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "bottom" as const,
  //     },
  //     title: {
  //       display: false,
  //       text: "Distribusi Usia Pembeli",
  //     },
  //   },
  // };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-x-4">
        {datas.map((item) => (
          // BERIKAN ANIMASI COUNTING
          <div
            key={item.id}
            className="bg-slate-50 rounded-md p-4 shadow-sm border border-gray-200 hover:scale-105 transition-all duration-300"
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

              {/* growth */}
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
        {/* <div className="bg-slate-50 p-4 col-span-2 rounded-sm h-80">
          <h3>Sales Report</h3>
          <Line data={data} options={options} />
        </div> */}
        {/* <div className="bg-slate-50 col-span-2 rounded-sm">
          <div className="flex justify-between px-3 pt-3">
            <h3 className="font-semibold text-gray-600">Monthly Report</h3>
            <button className="cursor-not-allowed" disabled>
              <Ellipsis />
            </button>
          </div>
          <div className=" p-4 rounded-sm h-80">
            <Line data={data} options={options} />
          </div>
        </div> */}
        <MonthlyLine />
        <AnalyticsDonut />
        {/* <div className="col-span-1 bg-slate-50 p-3 rounded-sm">
          <h3 className="font-semibold text-gray-600">Analytics</h3>
          <div>
            <Doughnut data={data1} options={options1} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardPage;
