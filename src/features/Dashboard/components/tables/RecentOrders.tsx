import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ActionMenu } from "@/components/common/Dropdown/ActionMenu";
import { features } from "@/constants/actionMenu";
import { OrdersTable } from "@/components/common/Table/OrdersTable";

export const RecentOrders = () => {
  const router = useRouter();
  const orders = useSelector((state: RootState) => state.orders.data);

  const recentOrders = orders.slice(0, 5);

  return (
    <div className=" flex flex-col bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md col-span-2 space-y-1 rounded-sm overflow-hidden">
      <ActionMenu items={features} label="Recent Orders" />
      <OrdersTable
        data={recentOrders}
        onRowClick={() => router.push("/product/orders")}
      />
    </div>
  );
};
