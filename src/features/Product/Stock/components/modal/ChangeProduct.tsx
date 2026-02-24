import { Stock } from "@/data/stocksProd";
import { UploadIcon, XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { InputPrimary } from "../../../../../components/ui/Input/InputPrimary";
import { InputDropdown } from "../../../../../components/ui/Input/InputDropdown";
import { CategoryLabels } from "@/constants/categoryLabels";
import { FloatingPortal } from "@floating-ui/react";
import Image from "next/image";

interface ChangeProductProps {
  formData: Stock | undefined;
  preview: string | null;
  onClose: () => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (val: string) => void;
}

export const ChangeProduct = (props: ChangeProductProps) => {
  const {
    formData,
    preview,
    handleImageChange,
    onClose,
    handleInputChange,
    handleCategoryChange,
  } = props;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle ESC Button
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!formData) return null;

  return (
    <FloatingPortal>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          className="bg-slate-50 dark:bg-gray-900 rounded-md shadow-xl w-full max-w-3xl p-6 relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 dark:text-gray-300 hover:scale-110 transition-transform duration-200 hover:text-gray-600 dark:hover:text-gray-500/70 text-xl cursor-pointer"
          >
            <XIcon />
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-slate-200">
            Edit Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Preview Image */}
            <div className="flex flex-col items-center justify-center p-4">
              <h3 className="text-sm text-gray-700 dark:text-gray-400 mb-2 font-bold">
                Product Image
              </h3>
              <div className="relative w-full aspect-square max-w-[280px] grid place-items-center p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 group overflow-hidden">
                <Image
                  src={preview || formData.image}
                  alt="Product"
                  fill
                  className="object-contain transition-transform group-hover:scale-150 duration-300"
                />
              </div>
              <label className="mt-4 w-full block">
                <span className="block text-sm text-gray-700 dark:text-gray-300 mb-2 font-bold">
                  Change Image
                </span>

                <div className="relative">
                  <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2  px-3 py-2 text-sm border border-gray-400 dark:border-none rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 w-full"
                  >
                    <UploadIcon size={20} />
                    Upload Image
                  </button>
                </div>
              </label>
            </div>

            {/* Right: Form Data */}
            <form
              // onSubmit={handleSubmit}
              className="p-4 flex flex-col justify-between"
            >
              {/* Name */}
              <InputPrimary
                label="Product Name"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
              />

              {/* Category */}
              <InputDropdown
                label="Category"
                value={formData?.category}
                category={CategoryLabels}
                onChange={handleCategoryChange}
              />

              {/* Price */}
              <InputPrimary
                label="Price ($)"
                type="number"
                name="price"
                value={formData?.price}
                onChange={handleInputChange}
              />

              {/* Piece */}
              <InputPrimary
                label="Stock (piece)"
                type="number"
                name="piece"
                value={formData?.piece}
                onChange={handleInputChange}
              />

              {/* Save Button */}
              <button
                type="submit"
                disabled
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg cursor-not-allowed"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </FloatingPortal>
  );
};
