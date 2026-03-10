import { cashFlow } from "@/data/cashFlow";
import { CashFlowView } from "@/features/Cash Flow/components/CashFlowView";
import { useLogicCashFLow } from "@/features/Cash Flow/hooks/useLogicCashFlow";

const CashFlowPage = () => {
  const cashLogic = useLogicCashFLow();

  return <CashFlowView cashFlow={cashFlow} {...cashLogic} />;
};

export default CashFlowPage;
