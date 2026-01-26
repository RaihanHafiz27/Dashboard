import { salesData } from "@/constants/salesData";

export const useMonthlySales = () => {
  const chartData = {
    labels: salesData.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Sales",
        data: salesData.map((item) => item.total),
        borderColor: "rgb(0, 132, 209)",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            context.chart.height,
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
  return {
    chartData,
  };
};
