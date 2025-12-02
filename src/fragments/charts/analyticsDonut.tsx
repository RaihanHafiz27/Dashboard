import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { LabelButton } from "../button/LabelButton";
import { ChartColor } from "@/types/chartColor.type";

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

export const AnalyticsDonut = ({ textColor }: ChartColor) => {
  const data = {
    labels: buyerData.map((item) => item.label),
    datasets: [
      {
        label: "Jumlah Pembeli",
        data: buyerData.map((item) => item.value),
        backgroundColor: [
          "rgb(0, 213, 190)",
          "rgb(0, 132, 209)",
          "rgb(237, 107, 255)",
        ],
        borderRadius: 10,
        spacing: 0,
        // borderColor: [
        //   "rgba(59, 130, 246, 1)",
        //   "rgba(34, 197, 94, 1)",
        //   "rgba(239, 68, 68, 1)",
        // ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    responsive: true,

    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 10,
          color: textColor,
        },
      },
      title: {
        display: false,
        text: "Distribusi Usia Pembeli",
      },
    },
  };

  return (
    <div className="flex flex-col col-span-1 bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md rounded-sm">
      <LabelButton title="Analytics" type="ellipsis" />
      <div className="grow p-4 relative h-80 2xl:h-96 hover:scale-105 transition-all duration-300 grid place-items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/3 translate-x-1/2 right-1/2 flex flex-col justify-center items-center">
          <p className="text-3xl 2xl:text-5xl font-semibold text-gray-700 dark:text-gray-300">
            1350
          </p>
          <p className="2xl:text-2xl text-gray-500 dark:text-gray-400">
            Transaction
          </p>
        </div>
      </div>
    </div>
  );
};
