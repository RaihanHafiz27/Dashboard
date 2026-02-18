import { stockProd } from "@/data/stocksProd";
import { StockView } from "@/features/Product/Stock/components/StockView";
import { useStockLogic } from "@/features/Product/Stock/hooks/useStockLogic";

const ProductStocks = () => {
  const stockLogic = useStockLogic(stockProd);

  return <StockView stockProd={stockProd} {...stockLogic} />;
};

export default ProductStocks;
