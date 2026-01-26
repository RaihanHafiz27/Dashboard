import { ChartOptions, Color } from "chart.js";

type ColorType = {
  textColor: string;
  gridColor?: string;
};

// ============================
// OPTION FOR BAR CHART
// ============================
export const getBarChartOption = ({
  textColor,
  gridColor,
}: ColorType): ChartOptions<"bar"> => {
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
}: ColorType): ChartOptions<"doughnut"> => {
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

export const getLineChartOption = ({ textColor, gridColor }: ColorType) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
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
