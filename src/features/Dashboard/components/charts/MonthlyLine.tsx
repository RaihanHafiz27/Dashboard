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
import { ChartColor } from "@/features/Dashboard/types/chartColor.type";
import { ActionMenu } from "@/components/common/Dropdown/ActionMenu";
import { features } from "@/constants/actionMenu";
import { useMonthlySales } from "../../hooks/useMonthlySales";
import { getLineChartOption } from "../../utils/chart-options";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Filler);

export const MonthlyLine = ({ textColor, gridColor }: ChartColor) => {
  const { chartData } = useMonthlySales();

  const options = getLineChartOption({ textColor, gridColor });

  return (
    <div className="flex flex-col bg-slate-100 dark:bg-transparent  col-span-2 rounded-sm overflow-hidden border border-slate-300 dark:border-gray-500 shadow-md">
      {/* <LabelButton title={"Monthly Report"} type="ellipsis" /> */}
      <ActionMenu items={features} label="Monthly Report" />
      <div className="grow p-4 rounded-sm h-80 2xl:h-96 hover:scale-105 transition-all duration-300">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};
