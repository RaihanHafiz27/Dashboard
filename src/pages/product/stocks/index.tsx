import { Stock, stockProd } from "@/data/stocksProd";
import { ChangeProduct } from "@/fragments/modals/ChangeProduct";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const productStocks = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [item, setItem] = useState<Stock | undefined>(undefined);
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

  return (
    <>
      <div
        className={`w-full space-y-4  p-4 rounded-sm bg-slate-100 border border-slate-300 dark:border-gray-500  shadow-md dark:bg-transparent`}
      >
        <div className="flex flex-col h-[600px] 2xl:h-[780px] space-y-2  overflow-hidden">
          <table className="min-w-full overflow-hidden table-auto">
            <thead className="border-b border-slate-300 dark:border-gray-500  ">
              <tr className="text-gray-700 dark:text-slate-300 tracking-wide text-sm">
                <th className="py-3 px-4 text text-start">Image</th>
                <th className="py-3 px-4 text text-start">Product</th>
                <th className="py-3 px-4 text text-start">Category</th>
                <th className="py-3 px-4 text text-start">Price</th>
                <th className="py-3 px-4 text text-center">Piece</th>
                <th className="py-3 px-4 text ">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 dark:divide-none">
              {stockProd.map((prod) => (
                <tr key={prod.id} className="">
                  <td className="py-2 2xl:py-3">
                    <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-sky-800/50 dark:bg-sky-700 grid place-items-center rounded-md">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        width={100}
                        height={100}
                        className="w-full h-auto"
                      />
                    </div>
                  </td>
                  <td className="py-2 2xl:py-3">
                    <p
                      className="text-gray-700 dark:text-slate-300 text-xs lg:text-sm"
                      title={`${prod.name}`}
                    >
                      {prod.name.substring(0, 15)}...
                    </p>
                  </td>
                  <td className="py-2 2xl:py-3 capitalize text-gray-700 dark:text-slate-300 text-xs lg:text-sm">
                    {prod.category}
                  </td>
                  <td className="py-2 2xl:py-3 text-gray-700 dark:text-slate-300 text-xs lg:text-sm">
                    $ {prod.price}
                  </td>
                  <td className="py-2 2xl:py-3 text-gray-700 dark:text-slate-300 text-center text-xs lg:text-sm">
                    {prod.piece}
                  </td>
                  <td className="py-2 2xl:py-3">
                    <div className="flex justify-center">
                      <div className="flex border border-gray-300 dark:border-gray-600 divide-x divide-gray-300 dark:divide-gray-600 rounded-md overflow-hidden">
                        <button
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Edit"
                        >
                          <SquarePen
                            size={20}
                            className="text-blue-600 dark:text-blue-400 cursor-pointer"
                            onClick={() => {
                              setIsOpenModal(true);
                              foundItem(prod.id);
                            }}
                          />
                        </button>
                        <button
                          className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          title="Delete"
                        >
                          <Trash2
                            size={20}
                            className="text-red-600 dark:text-red-500"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isOpenModal && (
        <ChangeProduct
          formData={formData}
          handleImageChange={handleImageChange}
          preview={preview}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
};

export default productStocks;
