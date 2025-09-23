import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Ellipsis } from "lucide-react";

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
        borderRadius: 10,
        spacing: 0,
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
    cutout: "70%",
    responsive: true,
    // plugins: {
    //   legend: {
    //     position: "bottom",
    //     labels: {
    //       color: "#374151", // warna teks
    //       font: {
    //         size: 12,
    //         family: "Poppins",
    //         weight: "400",
    //       },
    //       usePointStyle: true, // bentuk bulat kecil (bukan kotak)
    //       pointStyle: "circle", // bisa 'rect', 'circle', 'triangle'
    //       padding: 2, // jarak antar label
    //     },
    //   },
    //   title: {
    //     display: false,
    //     text: "Distribusi Usia Pembeli",
    //   },
    // },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 10,
        },
      },
      title: {
        display: false,
        text: "Distribusi Usia Pembeli",
      },
    },
  };

  return (
    <div className="flex flex-col col-span-1 bg-slate-50 p-3 rounded-sm">
      <div className="flex justify-between px-3 pt-3">
        <h3 className="font-semibold text-gray-600">Analytics</h3>
        <button className="cursor-not-allowed" disabled>
          <Ellipsis />
        </button>
      </div>
      <div className="grow p-4 relative hover:scale-105 transition-all duration-300 grid place-items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/3 translate-x-1/2 right-1/2 flex flex-col justify-center items-center">
          <p className="text-3xl 2xl:text-5xl font-semibold text-gray-700">
            1350
          </p>
          <p className="2xl:text-2xl text-gray-500">Transaction</p>
        </div>
      </div>
    </div>
  );
};
