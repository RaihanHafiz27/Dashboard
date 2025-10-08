import { orders, recentOrders, statusColors } from "@/data/recentOrders";
import { LabelButton } from "@/fragments/button/LabelButton";
import { Avatar } from "@/fragments/profile/Avatar";
import { ChevronRight, Command, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const list = ["Latest", "Price", "Status"];
const statuses = ["Pending", "Processing", "Completed", "Cancelled"];

const productOrders = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!menuRef.current || menuRef.current.contains(event.target as Node)) {
        return null;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [menuRef]);

  console.log(menuRef);

  return (
    <div className="w-full space-y-4 bg-slate-50 p-4 rounded-sm relative">
      {/* <div className=" grid grid-cols-3 gap-x-4">
        <div className="bg-slate-50 col-span-2 grid grid-cols-3 p-4 rounded-sm">
          <div className="space-y-4  col-span-2">
            <div className="space-y-1">
              <p>made with love♥️</p>
              <h3 className="text-2xl">Assignments</h3>
            </div>
            <p className="text-gray-500 max-w-[300px] text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              labore? Numquam, error.
            </p>
            <Link href={"#"}>see details</Link>
          </div>
          <div className="bg-sky-600/60 grid place-items-center rounded-md">
            <Image
              src={"/images/notebook.png"}
              width={100}
              height={100}
              alt="note"
              className="w-4/5 h-auto"
            />
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-sm relative group">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-300 group-hover:brightness-50 rounded-sm"
            style={{ backgroundImage: "url('/images/img-1.jpg')" }}
          ></div>
          <div className="absolute top-4  p-4 text-slate-200 space-y-6">
            <h3 className="text-xl">Work with...</h3>
            <p className="text-xs max-w-[250px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              labore? Numquam, error.
            </p>
            <Link href={"#"} className="">
              see details
            </Link>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl">All Orders</h3>
        <div ref={menuRef} className="grid grid-cols-2 gap-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for..."
              className="bg-slate-200 p-2 w-full rounded-sm text-sm cursor-not-allowed"
              disabled
            />
            <button
              className={`absolute top-2 right-2 cursor-not-allowed`}
              disabled
            >
              <Search size={20} />
            </button>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-200 p-2 w-full rounded-sm text-sm text-start flex justify-between cursor-pointer"
            >
              <div>
                <span className="text-gray-500">Short by :</span>
                <span>Newest</span>
              </div>
              <ChevronRight
                size={20}
                className={`${
                  isOpen ? "transition-all duration-300 rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div
          // ref={menuRef}
          className={`z-10 absolute bg-slate-200 top-14 right-4 p-2 rounded-md transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          }`}
        >
          <ul className="space-y-2">
            <li>
              <button
                // onClick={() => onFilterChange?.("all")}
                className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
              >
                <span>Newest</span>
                <div className="flex items-center">
                  <Command size={20} />
                  <span>N</span>
                </div>
              </button>
            </li>
            {list?.map((label) => (
              <li key={label} className="">
                <button
                  // onClick={() => onFilterChange?.(label)}
                  className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
                >
                  <span>{label}</span>
                  <div className="flex items-center">
                    <Command size={20} />
                    <span>{label.substring(0, 1)}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* tabel */}
      <div className="flex flex-col h-[555px] space-y-2  overflow-hidden">
        <table className="min-w-full overflow-hidden table-auto">
          <thead className="border-b border-gray-300">
            <tr className="text-gray-700 tracking-wide text-sm">
              <th className="p-3 ">ID</th>
              <th className="p-3 ">Product</th>
              <th className="p-3 ">Customer</th>
              <th className="p-3 ">Date</th>
              <th className="p-3 ">Status</th>
              <th className="p-3 ">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 text-sm">
            {orders.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-200  transition-all duration-200 text-gray-700"
              >
                <td className="p-3 font-medium ">{item.id}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-800/50">
                      <Image
                        src={item.image}
                        height={40}
                        width={40}
                        alt={item.id}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold " title={item.title}>
                        {item.title.substring(0, 15)}...
                      </p>
                      <p className="text-xs text-gray-600">lorem</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <Avatar name={item.customer} />
                    <p className="truncate font-medium text-gray-700">
                      {item.customer}
                    </p>
                  </div>
                </td>
                <td className="p-3 text-gray-600 text-center">{item.date}</td>
                <td className="p-3">
                  <div className="flex justify-center">
                    <span
                      className={`rounded-sm px-3 py-2 text-xs font-semibold leading-tight ${
                        statusColors[item.status] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </td>
                <td className="p-3 font-semibold text-gray-700 text-center">
                  $ {item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="border-2 border-pink-600 flex justify-between items-center py-2">
        <p className="text-gray-500 text-sm">
          Showing data 1 to 7 of 256K entries
        </p>
        <button>test</button>
      </div>
    </div>
  );
};

export default productOrders;
