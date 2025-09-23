import { Ellipsis } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { salesData } from "@/constants/salesData";
import { LabelButton } from "../button/LabelButton";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Filler);

export const MonthlyLine = () => {
  const data = {
    labels: salesData.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Sales",
        data: salesData.map((item) => item.total),
        borderColor: "rgb(0, 132, 209)", // hijau
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            context.chart.height
          );
          gradient.addColorStop(0, "rgba(0, 132, 209, 0.5)"); // atas lebih solid
          gradient.addColorStop(1, "rgba(0, 132, 209, 0)"); // bawah transparan
          return gradient;
        },
        fill: true, // area fill di bawah garis
        tension: 0.3, // bikin garis agak melengkung
        pointRadius: 0,
        pointHoverRadius: 5,
        // pointBackgroundColor: "rgb(0, 132, 209)",
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
      // title: {
      //   display: true,
      //   text: "Monthly Sales Report (2025)",
      // },
    },
    scales: {
      x: {
        grid: {
          display: false, // <-- matikan garis vertikal (kotak)
          drawBorder: false, // hilangkan border axis
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          display: false, // <-- matikan garis horizontal (kotak)
          drawBorder: false,
        },
        ticks: {
          color: "#6b7280",
          // optionally format ticks, e.g. callback untuk "Rp"
        },
      },
    },
  };

  return (
    <div className="flex flex-col bg-slate-50 col-span-2 rounded-sm overflow-hidden ">
      {/* <div className="flex justify-between px-3 pt-3">
        <h3 className="font-semibold text-gray-600">Monthly Report</h3>
        <button className="cursor-not-allowed" disabled>
          <Ellipsis />
        </button>
      </div> */}
      <LabelButton label={"Monthly Report"} />
      <div className="grow p-4 rounded-sm h-80 hover:scale-105 transition-all duration-300">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
