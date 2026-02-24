import { Stock } from "@/data/stocksProd";
import { StockTable } from "./table/StockTable";
import { ChangeProduct } from "@/features/Product/Stock/components/modal/ChangeProduct";

interface StockViewProps {
  stockProd: Stock[];
  handleOpenEditModal: (id: number) => void;
  selectedProduct: Stock | undefined;
  preview: string | null;
  isOpenModal: boolean;
  setIsOpenModal: (val: boolean) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (val: string) => void;
}

export const StockView = (props: StockViewProps) => {
  const {
    stockProd,
    handleOpenEditModal,
    selectedProduct,
    preview,
    isOpenModal,
    setIsOpenModal,
    handleImageChange,
    handleInputChange,
    handleCategoryChange,
  } = props;

  return (
    <>
      <div
        className={`w-full space-y-4  py-4 pl-4 pr-2 rounded-sm bg-slate-100 border border-slate-300 dark:border-gray-500  shadow-md dark:bg-transparent`}
      >
        {/* STOCK TABLE */}
        <StockTable data={stockProd} onClick={handleOpenEditModal} />
      </div>
      {/* MODAL EDIT DATA TABLE */}
      {isOpenModal && (
        <ChangeProduct
          formData={selectedProduct}
          preview={preview}
          onClose={() => setIsOpenModal(false)}
          handleImageChange={handleImageChange}
          handleInputChange={handleInputChange}
          handleCategoryChange={handleCategoryChange}
        />
      )}
    </>
  );
};
