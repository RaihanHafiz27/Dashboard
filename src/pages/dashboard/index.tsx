import { MonthlyLine } from "@/fragments/charts/monthlyLine";
import "react-day-picker/style.css";
import { TopProducts } from "@/fragments/table/TopProducts";
import { SummaryCard } from "@/fragments/cards/SummaryCard";
import { RecentOrders } from "@/fragments/table/RecentOrders";
import { Calendar } from "@/fragments/calendar/Calendar";
import { AnalyticsDonut } from "@/fragments/charts/analyticsDonut";
import { CategoryBar } from "@/fragments/charts/categoryBar";

const DashboardPage = () => {
  return (
    <div className="space-y-4 2xl:space-y-8">
      <SummaryCard />
      <div className="grid grid-cols-3 gap-x-4 2xl:gap-x-8">
        <MonthlyLine />
        <TopProducts />
      </div>
      <div className="grid grid-cols-3 gap-x-4 2xl:gap-x-8">
        <AnalyticsDonut />
        {/* <RecentOrders /> */}
        {/* <div className="bg-slate-50 rounded-sm col-span-2">
          <div className="flex items-center justify-between pt-3 px-3">
            <h3 className="font-semibold text-gray-600">
              Best Selling Categories
            </h3>
            <select
              name=""
              id="product-filter"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border-b border-gray-700 text-sm outline-0"
            >
              <option value="all">All</option>
              {formattedChartData?.datasets?.map((item) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grow p-4 h-80">
            <Bar data={chartData} options={options} />
          </div>
        </div> */}
        <CategoryBar />
      </div>
      {/* <div className="grid grid-cols-3 gap-x-4 2xl:gap-x-8">
        <Calendar />
        <RecentOrders />
      </div> */}
      <div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardPage;
