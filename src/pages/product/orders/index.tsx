import { statusColors } from "@/data/recentOrders";
import { SearchBar } from "@/fragments/input/SearchBar";
import { Pagination } from "@/fragments/pagination/Pagination";
import { allDummyOrders } from "@/lib/dummyData";
import { updateOrderStatus } from "@/store/ordersSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Order, OrderStatus } from "@/types/order.type";
import { ChevronLeft, ChevronRight, Command, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const list = ["Latest", "Price", "Status"];

const ITEMS_PER_PAGE = 7;

const productOrders = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSupported(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ambil state dan dispatch dari store
  const orders = useSelector((state: RootState) => state.orders.data);
  const dispatch = useDispatch<AppDispatch>();

  // Logika "slice" pagination
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const currentTableData = orders.slice(firstItemIndex, lastItemIndex);

  // Handler pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  // Handler untuk update status (sekarang pakai dispatch)
  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };

  // for dropdown filter
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

  return (
    <div className="w-full space-y-4 bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md p-4 rounded-sm relative">
      <div className="flex justify-between items-center pt-2">
        <h3 className="text-xl text-gray-700 dark:text-gray-300">All Orders</h3>
        <div ref={menuRef} className="grid grid-cols-2 gap-x-2">
          <SearchBar isFull={true} />
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-200/10 border border-gray-300 dark:border-gray-500  p-2 w-full rounded-sm text-sm text-start flex justify-between cursor-pointer"
            >
              <div>
                <span className="text-gray-500 dark:text-gray-300">
                  Short by :{" "}
                </span>
                <span className="text-gray-700 dark:text-gray-500">Newest</span>
              </div>
              <ChevronRight
                size={20}
                color="#6a7282"
                className={`${
                  isOpen ? "transition-all duration-300 rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div
          className={`z-10 absolute bg-slate-200 top-16 right-4 p-2 rounded-md transition-all duration-300 ease-in-out ${
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
      <div className="flex flex-col h-[600px] lg:h-[555px] 2xl:h-[650px] space-y-2  overflow-hidden">
        <table className="min-w-full overflow-hidden table-auto">
          <thead className="border-b border-gray-300 dark:border-gray-500">
            <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-sm">
              <th className="p-3 ">ID</th>
              <th className="p-3 ">Product</th>
              <th className="p-3 ">Address</th>
              <th className="p-3 ">Date</th>
              <th className="p-3 ">Amount</th>
              <th className="p-3 ">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 dark:divide-none text-sm">
            {currentTableData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-200 dark:hover:bg-gray-700/10 transition-all duration-200 text-gray-700 dark:text-gray-300"
              >
                <td className="p-3 font-medium text-xs lg:text-sm">
                  {isSupported ? item.id : item.id.slice(4, 8)}
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-12 w-12 2xl:w-16 2xl:h-16  items-center justify-center rounded-md bg-sky-800/50 dark:bg-sky-700">
                      <Image
                        src={item.imageUrl}
                        height={40}
                        width={40}
                        alt={item.id}
                        className="h-10 w-10 2xl:w-14 2xl:h-14 rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-xs lg:text-sm"
                        title={item.productName}
                      >
                        {isSupported
                          ? item?.productName
                          : item?.productName.slice(0, 6)}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {isSupported ? "Quantity : " : "Qty : "}
                        {item?.quantity}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  {/* <div className="flex items-center space-x-3">
                    <Avatar name={item.customerName} />
                    <p className="truncate font-medium text-gray-700">
                      {item.customerName}
                    </p>
                  </div> */}
                  <p className="truncate text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {isSupported
                      ? item.customerAddress
                      : `${item.customerAddress.substring(0, 10)}...`}
                  </p>
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-300 text-center text-xs lg:text-sm">
                  {item.date}
                </td>

                <td className="p-3 font-semibold text-gray-700 dark:text-gray-300 text-center text-xs lg:text-sm">
                  $ {item?.amount ? item.amount.toLocaleString() : 0}
                </td>
                <td className="p-3">
                  <StatusDropdown
                    status={item.status}
                    color={statusColors}
                    id={item.id}
                    onClick={handleStatusUpdate}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className=" flex justify-between items-center pb-2">
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Showing data 1 to 7 of 256K entries
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};

export default productOrders;

type Props = {
  status: OrderStatus;
  color: Record<OrderStatus, string>;
  id: string;
  onClick: (id: string, newStatus: OrderStatus) => void;
};

const StatusDropdown = ({ status, color, id, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  const statuses: OrderStatus[] = [
    "Pending",
    "Processing",
    "Completed",
    "Cancelled",
  ];

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !dropMenuRef.current ||
        dropMenuRef.current.contains(event.target as Node)
      ) {
        return null;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [dropMenuRef]);

  return (
    <div ref={dropMenuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center rounded-sm px-3 py-2 w-full cursor-pointer transition-all duration-300 ${
          color[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        <span className={` text-xs font-semibold leading-tight `}>
          {status}
        </span>
        <ChevronRight
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {/* menu */}
      <div
        className={`z-10 fixed bg-slate-50 dark:bg-slate-800 top-10 right-10 w-40 p-4 rounded-md transition-all duration-300 ease-in-out space-y-2 ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-full opacity-0 invisible"
        }`}
      >
        {statuses.map((stat) => (
          <button
            key={stat}
            onClick={() => {
              onClick(id, stat);
              setIsOpen(!isOpen);
            }}
            className={`flex justify-between items-center rounded-sm px-3 py-2 w-full cursor-pointer transition-all duration-300 ${
              color[stat] || "bg-gray-100 text-gray-700"
            } border border-${color[stat]} `}
          >
            {stat}
          </button>
        ))}
      </div>
    </div>
  );
};
