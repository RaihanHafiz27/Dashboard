import {
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Package,
  Users,
  DollarSign,
  Handbag,
  Ellipsis,
  Stars,
  StarsIcon,
  Star,
} from "lucide-react";
import CountUp from "react-countup";
import { MonthlyLine } from "@/fragments/charts/monthlyLine";
import { AnalyticsDonut } from "@/fragments/charts/analyticsDonut";
import { it } from "node:test";
import Image from "next/image";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { TopProducts } from "@/fragments/table/TopProducts";
import { SummaryCard } from "@/fragments/cards/SummaryCard";
import { RecentOrders } from "@/fragments/table/RecentOrders";
import { Calendar } from "@/fragments/calendar/Calendar";

// /data/buyers.ts
export interface BuyerCategory {
  label: string;
  value: number;
}

export const buyerData: BuyerCategory[] = [
  { label: "Remaja (13-19)", value: 350 },
  { label: "Dewasa (20-40)", value: 780 },
  { label: "Tua (41+)", value: 220 },
];

const DashboardPage = () => {
  return (
    <div className="space-y-4 2xl:space-y-8">
      <SummaryCard />
      <div className="grid grid-cols-3 gap-x-4 2xl:gap-x-8">
        <MonthlyLine />
        <TopProducts />
      </div>
      <div className="grid grid-cols-3 gap-x-4 2xl:gap-x-8">
        <Calendar />
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardPage;
