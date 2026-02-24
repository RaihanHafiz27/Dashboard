import { Stock } from "@/data/stocksProd";
import { useState } from "react";

export const useStockLogic = (stockProd: Stock[]) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Stock | undefined>(
    undefined,
  );
  const [preview, setPreview] = useState<string | null>(null);

  // logic for open modal popup
  const handleOpenEditModal = (id: number) => {
    const data = stockProd.find((item) => item.id === id);
    if (data) {
      setSelectedProduct(data);
      setIsOpenModal(true);
    } else {
      console.error("Product not found");
    }
  };

  // logic fot handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (preview) URL.revokeObjectURL(preview);

      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // logic for handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSelectedProduct((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]: name === "price" || name === "piece" ? Number(value) : value,
      };
    });
  };

  // logic for handle category change
  const handleCategoryChange = (val: string) => {
    setSelectedProduct((prev) => {
      if (!prev) return prev;
      return { ...prev, category: val };
    });
  };

  return {
    handleOpenEditModal,
    setSelectedProduct,
    selectedProduct,
    preview,
    isOpenModal,
    setIsOpenModal,
    handleImageChange,
    handleInputChange,
    handleCategoryChange,
  };
};
