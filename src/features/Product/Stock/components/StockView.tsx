import { Stock } from "@/data/stocksProd";
import { StockTable } from "./table/StockTable";
import { ChangeProduct } from "@/features/Product/Stock/components/modal/ChangeProduct";

interface StockViewProps {
  stockProd: Stock[];
  handleOpenEditModal: (id: number) => void;
  selectedProduct: Stock | undefined;
  preview: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpenModal: boolean;
  setIsOpenModal: (val: boolean) => void;
}

export const StockView = (props: StockViewProps) => {
  const {
    stockProd,
    handleOpenEditModal,
    selectedProduct,
    preview,
    handleImageChange,
    isOpenModal,
    setIsOpenModal,
  } = props;

  return (
    <>
      <div
        className={`w-full space-y-4  p-4 rounded-sm bg-slate-100 border border-slate-300 dark:border-gray-500  shadow-md dark:bg-transparent`}
      >
        {/* STOCK TABLE */}
        <StockTable data={stockProd} onClick={handleOpenEditModal} />
      </div>
      {/* MODAL EDIT DATA TABLE */}
      {isOpenModal && (
        <ChangeProduct
          formData={selectedProduct}
          handleImageChange={handleImageChange}
          preview={preview}
          onClick={() => setIsOpenModal(false)}
        />
      )}
    </>
  );
};
