import { useMemo } from "react";

interface BuyerCategory {
  label: string;
  value: number;
}

const buyerData: BuyerCategory[] = [
  { label: "Teenagers (13-19)", value: 350 },
  { label: "Adults (20-40)", value: 780 },
  { label: "Elderly (41+)", value: 220 },
];

export const useBuyerAnalytics = () => {
  const chartData = useMemo(
    () => ({
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
          borderWidth: 0,
        },
      ],
    }),
    []
  );

  const totalTransaction = useMemo(() => {
    return buyerData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return {
    chartData,
    totalTransaction,
  };
};
