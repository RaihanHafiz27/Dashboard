import { Stock, stockProd } from "@/data/stocksProd";
import { useAppSelector } from "@/store/hooks";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const productStocks = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [item, setItem] = useState<Stock | undefined>(undefined);
  // const isDarkMode = useAppSelector((state) => state.theme.darkMode);
  const [formData, setFormData] = useState<Stock | undefined>(undefined);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      // Nanti bisa diganti jadi upload ke server / Firebase Storage.
      // setFormData({ ...formData, image: imageUrl });
    }
  };

  const foundItem = (id: number) => {
    if (id) {
      const data = stockProd.find((item) => id === item.id);
      setItem(data);
    } else {
      return "Sorry ID no available ";
    }
    return;
  };

  console.log(item);

  return (
    <>
      <div
        className={`w-full space-y-4  p-4 rounded-sm bg-slate-50 dark:bg-slate-800`}
      >
        <div className="flex flex-col h-[600px] space-y-2  overflow-hidden">
          <table className="min-w-full overflow-hidden table-auto">
            <thead className="border-b border-gray-300 ">
              <tr className="text-gray-700 tracking-wide text-sm">
                <th className="p-3 text-start text-gray-700 dark:text-slate-300">
                  Image
                </th>
                <th className="p-3 text-start">Product</th>
                <th className="p-3 text-start">Category</th>
                <th className="p-3 text-start">Price</th>
                <th className="p-3 text-start">Piece</th>
                <th className="p-3 ">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {stockProd.map((prod) => (
                <tr key={prod.id} className="">
                  <td className="p-2">
                    <div className="w-16 h-16 bg-sky-800/70 grid place-items-center rounded-md">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        width={100}
                        height={100}
                        className="w-full h-auto"
                      />
                    </div>
                  </td>
                  <td className="p-2">
                    <p className="text-gray-700" title={`${prod.name}`}>
                      {prod.name.substring(0, 15)}...
                    </p>
                  </td>
                  <td className="p-2 lowercase text-gray-700">
                    {prod.category}
                  </td>
                  <td className="p-2 text-gray-700">$ {prod.price}</td>
                  <td className="p-2 text-gray-700">{prod.piece}</td>
                  <td className="p-2">
                    <div className="border border-gray-400 grid grid-cols-2 divide-x divide-gray-400 py-1.5 rounded-md">
                      <button
                        className="flex justify-center cursor-pointer"
                        onClick={() => {
                          setIsOpenModal(true);
                          foundItem(prod.id);
                        }}
                      >
                        <SquarePen color="#6a7282" size={20} />
                      </button>
                      <button className="flex justify-center cursor-pointer">
                        <Trash2 color="#B32E15" size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isOpenModal && (
        // <div className="inset-0 bg-gray-900/70 fixed grid place-items-center">
        //   <div className="bg-slate-50 w-1/2">test</div>
        // </div>
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-xl w-full max-w-3xl p-6 relative">
            {/* Tombol Close */}
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Edit Product
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kiri: Preview Gambar */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-slate-700 p-4">
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Product Image
                </h3>
                <img
                  src={preview || formData?.image}
                  alt="Product"
                  className="w-64 h-64 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                />
                <label className="mt-4 w-full">
                  <span className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Change Image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-slate-700 focus:outline-none"
                  />
                </label>
              </div>

              {/* Kanan: Form Data */}
              <form
                // onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Nama */}
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData?.name}
                    // onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-700 dark:text-white"
                    required
                  />
                </div>

                {/* Kategori */}
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData?.category}
                    // onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="mens-watches">Mens Watches</option>
                    <option value="womens-watches">Womens Watches</option>
                    <option value="luxury">Luxury</option>
                    <option value="smartwatch">Smartwatch</option>
                  </select>
                </div>

                {/* Harga */}
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData?.price}
                    // onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                {/* Jumlah Stok */}
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Stock (piece)
                  </label>
                  <input
                    type="number"
                    name="piece"
                    value={formData?.piece}
                    // onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                {/* Tombol Simpan */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-2"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default productStocks;
