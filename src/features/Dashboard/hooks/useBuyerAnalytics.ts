import { useMemo } from "react";

interface BuyerCategory {
  label: string;
  value: number;
}

const buyerData: BuyerCategory[] = [
  { label: "Teenagers (13-19)", value: 750 },
  { label: "Adults (20-40)", value: 350 },
  { label: "Elderly (41+)", value: 200 },
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
            "rgb(127, 34, 254)",
            "rgb(166, 132, 255)",
            "rgb(196, 180, 255)",
          ],
          borderRadius: 10,
          spacing: 0,
          borderWidth: 0,
        },
      ],
    }),
    [],
  );

  const totalTransaction = useMemo(() => {
    return buyerData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return {
    chartData,
    totalTransaction,
  };
};
