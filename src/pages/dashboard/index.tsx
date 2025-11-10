import { MonthlyLine } from "@/fragments/charts/monthlyLine";
import "react-day-picker/style.css";
import { TopProducts } from "@/fragments/table/TopProducts";
import { SummaryCard } from "@/fragments/cards/SummaryCard";
import { RecentOrders } from "@/fragments/table/RecentOrders";
import { Calendar } from "@/fragments/calendar/Calendar";
import { AnalyticsDonut } from "@/fragments/charts/analyticsDonut";
import { CategoryBar } from "@/fragments/charts/categoryBar";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  return (
    <div className="space-y-4 2xl:space-y-8">
      <SummaryCard />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-x-4 2xl:gap-x-8">
        <MonthlyLine />
        <div className="hidden lg:block">
          <TopProducts />
        </div>
      </div>
      {/* chart components for tablet */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        <TopProducts />
        <AnalyticsDonut />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-x-4 2xl:gap-x-8">
        <div className="hidden lg:block">
          <AnalyticsDonut />
        </div>
        <CategoryBar />
      </div>
      <div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardPage;
