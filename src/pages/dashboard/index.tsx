import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// wajib register element yang dipakai
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import {
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Package,
  Users,
  DollarSign,
} from "lucide-react";

interface Count {
  id: number;
  title: string;
  sum: number;
  growth: number; // persentase pertumbuhan (+ naik, - turun)
  icon: React.ReactNode;
}

// /data/sales.ts
export interface Sale {
  month: string;
  total: number;
}

export const salesData: Sale[] = [
  { month: "Jan", total: 12000 },
  { month: "Feb", total: 15000 },
  { month: "Mar", total: 18000 },
  { month: "Apr", total: 17000 },
  { month: "May", total: 22330 },
  { month: "Jun", total: 25120 },
  { month: "Jul", total: 24930 },
  { month: "Aug", total: 27000 },
  { month: "Sep", total: 32800 },
  { month: "Oct", total: 28370 },
  { month: "Nov", total: 35000 },
  { month: "Dec", total: 22175 },
];

const datas: Count[] = [
  {
    id: 1,
    title: "new order",
    sum: 127,
    growth: +12,
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "products",
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
  const data = {
    labels: salesData.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Sales",
        data: salesData.map((item) => item.total),
        borderColor: "rgb(0, 132, 209)", // hijau
        backgroundColor: "rgba(34,197,94,0.3)", // hijau transparan
        fill: true, // area fill di bawah garis
        tension: 0.3, // bikin garis agak melengkung
        pointRadius: 4,
        pointBackgroundColor: "rgb(0, 132, 209)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Sales Report (2025)",
      },
    },
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-x-4">
        {datas.map((item) => (
          // BERIKAN ANIMASI COUNTING
          <div
            key={item.id}
            className="bg-slate-50 rounded-md p-4 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg capitalize font-medium">{item.title}</p>
              <i>{item.icon}</i>
            </div>
            <span className="flex ">
              <p className="text-2xl font-bold">{item.sum}</p>

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
        <div className="bg-slate-50 p-4 col-span-2 rounded-sm h-80">
          <Line data={data} options={options} />
        </div>
        <div className="col-span-1 bg-slate-50">test</div>
      </div>
    </div>
  );
};

export default DashboardPage;
