import { cashFlow } from "@/data/cashFlow";
import { CashFlowView } from "@/features/Cash Flow/components/CashFlowView";

const CashFlowPage = () => {
  return <CashFlowView cashFlow={cashFlow} />;
};

export default CashFlowPage;
