import { Bar } from "react-chartjs-2";
import { useCategorySales } from "../../hooks/useCategorySales";
import { getBarChartOption } from "../../utils/chart-options";
import { FilterDropdown } from "@/components/common/Dropdown/FilterDropdown";
import { Chart as ChartJS, BarElement, CategoryScale, Legend } from "chart.js";
import { ChartColor } from "@/features/Dashboard/types/chartColor.type";
import { HeaderChart } from "../header/HeaderChart";
// import { FilterDropdown } from "@/features/Users/components/dropdown/FilterDropdown";

ChartJS.register(BarElement, CategoryScale, Legend);

export const CategoryBar = ({ textColor, gridColor }: ChartColor) => {
  const { filter, setFilter, chartData, filterOptions } = useCategorySales();

  const options = getBarChartOption({ textColor, gridColor });

  return (
    <div className=" bg-slate-100 dark:bg-transparent group border border-slate-300 dark:border-gray-500 shadow-md rounded-sm lg:col-span-2">
      <HeaderChart label="Best Categories">
        {/* <FilterControl
          options={filterOptions}
          selected={filter}
          onChange={setFilter}
        /> */}
        <FilterDropdown
          value={filter}
          options={filterOptions}
          onChange={setFilter}
          chart={true}
        />
      </HeaderChart>
      <div className="grow p-4 h-80 2xl:h-96 group-hover:scale-103 transition-all duration-300 ">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
