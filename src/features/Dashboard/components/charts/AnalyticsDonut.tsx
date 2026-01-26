import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { ChartColor } from "@/features/Dashboard/types/chartColor.type";
import { ActionMenu } from "@/components/common/Dropdown/ActionMenu";
import { features } from "@/constants/actionMenu";
import { getDougnutChartOption } from "../../utils/chart-options";
import { useBuyerAnalytics } from "../../hooks/useBuyerAnalytics";

ChartJS.register(ArcElement, Legend, CategoryScale, Tooltip);

export const AnalyticsDonut = ({ textColor }: ChartColor) => {
  const { chartData, totalTransaction } = useBuyerAnalytics();

  const options = getDougnutChartOption({ textColor });

  return (
    <div className=" flex flex-col lg:col-span-1 bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md rounded-sm">
      <ActionMenu items={features} label="Analytics" />
      <div className="grow p-4 relative h-80 2xl:h-96 hover:scale-105 transition-all duration-300 grid place-items-center">
        <Doughnut data={chartData} options={options} />
        <div className="absolute top-1/3 translate-x-1/2 right-1/2 flex flex-col justify-center items-center">
          <p className="text-3xl 2xl:text-5xl font-semibold text-gray-700 dark:text-gray-300">
            {totalTransaction}
          </p>
          <p className="2xl:text-2xl text-gray-500 dark:text-gray-400">
            Transaction
          </p>
        </div>
      </div>
    </div>
  );
};
