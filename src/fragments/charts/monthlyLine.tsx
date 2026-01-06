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
import { LabelButton } from "../../components/ui/Button/LabelButton";
import { ChartColor } from "@/types/chartColor.type";
import { ActionMenu } from "@/components/common/Dropdown/ActionMenu";
import { features } from "@/constants/actionMenu";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Filler);

export const MonthlyLine = ({ textColor, gridColor }: ChartColor) => {
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
          gradient.addColorStop(0, "rgba(0, 132, 209, 0.5)");
          gradient.addColorStop(1, "rgba(0, 132, 209, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 5,
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
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: textColor,
        },
        border: {
          display: true,
          color: gridColor,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: textColor,
        },
        border: {
          display: true,
          color: gridColor,
        },
      },
    },
  };

  return (
    <div className="flex flex-col bg-slate-100 dark:bg-transparent  col-span-2 rounded-sm overflow-hidden border border-slate-300 dark:border-gray-500 shadow-md">
      {/* <LabelButton title={"Monthly Report"} type="ellipsis" /> */}
      <ActionMenu items={features} label="Monthly Report" />
      <div className="grow p-4 rounded-sm h-80 2xl:h-96 hover:scale-105 transition-all duration-300">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
