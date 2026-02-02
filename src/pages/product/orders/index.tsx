import { OrderView } from "@/features/Product/Order/components/OrderView";
import { useOrderLogic } from "@/features/Product/Order/hooks/useOrderLogic";

const productOrders = () => {
  const logic = useOrderLogic();

  return <OrderView {...logic} />;
};

export default productOrders;
