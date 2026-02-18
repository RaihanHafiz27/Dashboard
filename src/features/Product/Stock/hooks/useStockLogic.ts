import { Stock } from "@/data/stocksProd";
import { useState } from "react";

export const useStockLogic = (stockProd: Stock[]) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Stock | undefined>(
    undefined,
  );
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (preview) URL.revokeObjectURL(preview);

      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handleOpenEditModal = (id: number) => {
    const data = stockProd.find((item) => item.id === id);
    if (data) {
      setSelectedProduct(data);
      setIsOpenModal(true);
    } else {
      console.error("Product not found");
    }
  };

  return {
    handleOpenEditModal,
    selectedProduct,
    preview,
    isOpenModal,
    setIsOpenModal,
    handleImageChange,
  };
};
