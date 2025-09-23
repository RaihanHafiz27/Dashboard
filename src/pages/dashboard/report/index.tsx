import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, Tooltip);

const products = [
  {
    productId: "P001",
    productName: "Laptop Pro X",
    color: "rgb(0, 213, 190)",
    sales: [
      { month: "Jan", total: 60 },
      { month: "Feb", total: 80 },
      { month: "Mar", total: 175 },
      { month: "Apr", total: 170 },
      { month: "May", total: 95 },
      { month: "Jun", total: 100 },
      { month: "Jul", total: 120 },
      { month: "Aug", total: 100 },
      { month: "Sep", total: 90 },
      { month: "Oct", total: 125 },
      { month: "Nov", total: 110 },
      { month: "Dec", total: 80 },
    ],
  },
  {
    productId: "P002",
    productName: "Smartphone Ultra",
    color: "rgb(0, 132, 209)",

    sales: [
      { month: "Jan", total: 60 },
      { month: "Feb", total: 110 },
      { month: "Mar", total: 95 },
      { month: "Apr", total: 120 },
      { month: "May", total: 130 },
      { month: "Jun", total: 140 },
      { month: "Jul", total: 160 },
      { month: "Aug", total: 155 },
      { month: "Sep", total: 170 },
      { month: "Oct", total: 165 },
      { month: "Nov", total: 180 },
      { month: "Dec", total: 130 },
    ],
  },
  {
    productId: "P003",
    productName: "Wireless Earbuds",
    color: "rgb(237, 107, 255)",

    sales: [
      { month: "Jan", total: 60 },
      { month: "Feb", total: 135 },
      { month: "Mar", total: 150 },
      { month: "Apr", total: 95 },
      { month: "May", total: 140 },
      { month: "Jun", total: 180 },
      { month: "Jul", total: 200 },
      { month: "Aug", total: 175 },
      { month: "Sep", total: 160 },
      { month: "Oct", total: 190 },
      { month: "Nov", total: 210 },
      { month: "Dec", total: 100 },
    ],
  },
];

const reportPage = () => {
  const dataset = products.map((product, index) => ({
    label: product.productName,
    data: product.sales.map((item) => item.total),

    backgroundColor: product.color,
    borderRadius: 5,
    tension: 0.3,
  }));

  const chartData = {
    labels: products[0].sales.map((s) => s.month),
    datasets: dataset,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        padding: 10,
      },
    },
    scales: {
      x: {
        // stacked: true,

        grid: {
          display: false, // <-- matikan garis vertikal (kotak)
          drawBorder: false, // hilangkan border axis
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        // stacked: true,

        grid: {
          display: true, // <-- matikan garis horizontal (kotak)
          drawBorder: false,
        },
        ticks: {
          color: "#6b7280",
          // optionally format ticks, e.g. callback untuk "Rp"
        },
      },
    },
  };

  return (
    <div className="flex flex-col border-2 border-pink-500">
      <div className="grid grid-cols-3">
        <div className="bg-slate-50 rounded-sm col-span-2">
          <div className="flex items-center justify-between pt-3 px-3">
            <h2>Testunfg</h2>
            <select name="" id="" className="border border-gray-600 px-4">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="grow p-4 ">
            <Bar data={chartData} options={options} />
          </div>
        </div>
        <div>hello repo</div>
      </div>
    </div>
  );
};

export default reportPage;
