import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
} from "chart.js";
import { productsCategory } from "@/data/categoryProd";
import { useEffect, useState } from "react";
import { LabelButton } from "../../components/ui/Button/LabelButton";
import { ChartColor } from "@/types/chartColor.type";
import { FilterControl } from "@/components/common/Dropdown/DropdownFilter";

ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, Tooltip);

const formattedChartData = {
  labels: productsCategory[0].sales.map((s) => s.month),
  datasets: productsCategory.map((product) => ({
    label: product.productName,
    data: product.sales.map((item) => item.total),
    backgroundColor: product.color,
    borderRadius: 5,
  })),
};

export const CategoryBar = ({ textColor, gridColor }: ChartColor) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [chartData, setChartData] = useState(formattedChartData);

  useEffect(() => {
    if (selectedFilter === "all") {
      setChartData(formattedChartData);
    } else {
      const fillteredDataset = formattedChartData.datasets.find(
        (dataset) => dataset.label === selectedFilter
      );

      if (fillteredDataset) {
        setChartData({
          labels: formattedChartData.labels,
          datasets: [fillteredDataset],
        });
      }
    }
  }, [selectedFilter]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        padding: 10,
        labels: {
          color: textColor,
        },
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
          color: gridColor,
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

  const labels = formattedChartData.datasets.map((l) => l.label);

  return (
    <div className=" bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md rounded-sm lg:col-span-2">
      {/* <LabelButton
        title="Best Sell Categories"
        type="filter"
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        filterOptions={labels}
      /> */}
      <FilterControl
        label="Best Categories"
        options={labels}
        selected={selectedFilter}
        onChange={setSelectedFilter}
      />
      <div className="grow p-4 h-80 2xl:h-96">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
