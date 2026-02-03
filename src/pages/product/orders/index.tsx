import { OrderView } from "@/features/Product/Order/components/OrderView";
import { useOrderLogic } from "@/features/Product/Order/hooks/useOrderLogic";
import { useState } from "react";

const productOrders = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  const logic = useOrderLogic();

  return <OrderView {...logic} />;
};

export default productOrders;
