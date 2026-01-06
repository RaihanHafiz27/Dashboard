import { Stock } from "@/data/stocksProd";
import { UploadIcon, XIcon } from "lucide-react";
import { useRef } from "react";
import { InputPrimary } from "../../components/ui/Input/InputPrimary";
import { InputDropdown } from "../../components/ui/Input/InputDropdown";
import { Category } from "@/constants/categoryLabels";

export const ChangeProduct = ({
  formData,
  preview,
  handleImageChange,
  setIsOpenModal,
}: {
  formData: Stock | undefined;
  preview: string | null;
  handleImageChange: any;
  setIsOpenModal: any;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 rounded-md shadow-xl w-full max-w-3xl p-6 relative">
        {/* Tombol Close */}
        <button
          onClick={() => setIsOpenModal(false)}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-400 dark:hover:text-gray-500/70 text-xl cursor-pointer"
        >
          <XIcon />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Edit Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kiri: Preview Gambar */}
          <div className="flex flex-col items-center justify-center rounded-xl p-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Product Image
            </h3>
            <img
              src={preview || formData?.image}
              alt="Product"
              className="w-64 h-64 object-cover rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50"
            />
            <label className="mt-4 w-full block">
              <span className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
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
                  className="flex items-center gap-2 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-200 w-full"
                >
                  <UploadIcon size={20} />
                  Upload Image
                </button>
              </div>
            </label>
          </div>

          {/* Kanan: Form Data */}
          <form
            // onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Nama */}
            <InputPrimary
              label="Product Name"
              type="text"
              name="name"
              value={formData?.name}
            />

            {/* Kategori */}
            <InputDropdown value={formData?.category} category={Category} />

            {/* Harga */}
            <InputPrimary
              label="Price ($)"
              type="number"
              name="price"
              value={formData?.price}
            />

            {/* Jumlah Stok */}
            <InputPrimary
              label="Stock (piece)"
              type="number"
              name="piece"
              value={formData?.piece}
            />

            {/* Tombol Simpan */}
            <button
              type="submit"
              disabled
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-2.5 cursor-not-allowed"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
