import { productsCategory } from "@/data/categoryProd";
import { useEffect, useState } from "react";

const initialChartData = {
  labels: productsCategory[0].sales.map((s) => s.month),
  datasets: productsCategory.map((product) => ({
    label: product.productName,
    data: product.sales.map((item) => item.total),
    backgroundColor: product.color,
    borderRadius: 5,
  })),
};

export const useCategorySales = () => {
  const [filter, setFilter] = useState<string>("all");
  const [chartData, setChartData] = useState(initialChartData);

  const filterOptions = initialChartData.datasets.map((l) => l.label);

  useEffect(() => {
    if (filter === "all") {
      setChartData(initialChartData);
    } else {
      const fillteredDataset = initialChartData.datasets.find(
        (dataset) => dataset.label === filter
      );

      if (fillteredDataset) {
        setChartData({
          labels: initialChartData.labels,
          datasets: [fillteredDataset],
        });
      }
    }
  }, [filter]);

  return {
    filter,
    setFilter,
    chartData,
    filterOptions,
  };
};
