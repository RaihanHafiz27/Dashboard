import { Bar } from "react-chartjs-2";
import { useCategorySales } from "../hooks/useCategorySales";
import { getBarChartOption } from "../utils/chart-options";
import { FilterControl } from "@/components/common/Dropdown/DropdownFilter";

type Props = {
  textColor: string;
  gridColor: string;
};

export const CategoryBar = ({ textColor, gridColor }: Props) => {
  const { filter, setFilter, chartData, filterOptions } = useCategorySales();

  const options = getBarChartOption({ textColor, gridColor });

  return (
    <div className=" bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md rounded-sm lg:col-span-2">
      <FilterControl
        label="Best Categories"
        options={filterOptions}
        selected={filter}
        onChange={setFilter}
      />
      <div className="grow p-4 h-80 2xl:h-96">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
