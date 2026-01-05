import { MonthlyLine } from "@/fragments/charts/monthlyLine";
import "react-day-picker/style.css";
import { TopProducts } from "@/fragments/table/TopProducts";
import { SummaryCard } from "@/fragments/cards/SummaryCard";
import { RecentOrders } from "@/fragments/table/RecentOrders";
import { AnalyticsDonut } from "@/fragments/charts/analyticsDonut";
import { CategoryBar } from "@/fragments/charts/categoryBar";
import { useTheme } from "@/context/ThemeContext";

const DashboardPage = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#d1d5dc" : "#4a5565";
  const gridColor = theme === "dark" ? "#374151" : "#E5E7EB";

  return (
    <div className="space-y-6 2xl:space-y-8">
      <SummaryCard />
      <div className="grid md:grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-y-0 gap-x-4 2xl:gap-x-8">
        <AnalyticsDonut textColor={textColor} />
        <CategoryBar textColor={textColor} gridColor={gridColor} />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-x-4 2xl:gap-x-8">
        <MonthlyLine textColor={textColor} gridColor={gridColor} />
        <div className="hidden lg:block">
          <TopProducts />
        </div>
      </div>
      <div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardPage;
