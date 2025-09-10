import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Legend, CategoryScale, Tooltip);

// /data/buyers.ts
export interface BuyerCategory {
  label: string;
  value: number;
}

export const buyerData: BuyerCategory[] = [
  { label: "Teenagers (13-19)", value: 350 },
  { label: "Adults (20-40)", value: 780 },
  { label: "Elderly (41+)", value: 220 },
];

export const AnalyticsDonut = () => {
  const data = {
    labels: buyerData.map((item) => item.label),
    datasets: [
      {
        label: "Jumlah Pembeli",
        data: buyerData.map((item) => item.value),
        backgroundColor: [
          "rgb(246, 51, 154)",
          "rgb(0, 166, 244)",
          "rgb(124, 207, 0)",
        ],
        // borderColor: [
        //   "rgba(59, 130, 246, 1)",
        //   "rgba(34, 197, 94, 1)",
        //   "rgba(239, 68, 68, 1)",
        // ],
        // borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
        text: "Distribusi Usia Pembeli",
      },
    },
  };

  return (
    <div className="col-span-1 bg-slate-50 p-3 rounded-sm">
      <h3 className="font-semibold text-gray-600">Analytics</h3>
      <div>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};
