import { ChartOptions } from "chart.js";

// ============================
// OPTION FOR BAR CHART
// ============================
export const getBarChartOption = ({
  textColor,
  gridColor,
}: {
  textColor: string;
  gridColor: string;
}): ChartOptions<"bar"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          padding: 10,
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
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
};

// ============================
// OPTION FOR DOUGHNUT CHART
// ============================
export const getDougnutChartOption = ({
  textColor,
}: {
  textColor: string;
}): ChartOptions<"doughnut"> => {
  return {
    cutout: "70%",
    responsive: true,

    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 10,
          color: textColor,
        },
      },
      title: {
        display: false,
        text: "Distribusi Usia Pembeli",
      },
    },
  };
};
