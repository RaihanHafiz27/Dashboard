import { Calendar } from "@/fragments/calendar/Calendar";
import { SummaryUsers } from "@/fragments/cards/SummaryUsers";
import { SearchBar } from "@/components/ui/Input/SearchBar";
import { Pagination } from "@/fragments/pagination/Pagination";
import { RootState } from "@/store/store";
import { Dot, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ITEMS_PER_PAGE = 7;

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const users = useSelector((state: RootState) => state.users.data);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSupported(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logika "slice" pagination
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const currentTableData = users.slice(firstItemIndex, lastItemIndex);

  // Handler pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      <SummaryUsers />
      <div
        className={`w-full space-y-4  p-5 rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md `}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-300 text-xl">
            All Users
          </p>
          <div className="flex items-center space-x-4">
            <SearchBar isFull={true} />
            <button
              className="bg-sky-700 px-4 py-2 text-sm rounded-sm text-slate-200 cursor-not-allowed"
              disabled
            >
              Add user
            </button>
          </div>
        </div>
        {/* Table Users */}
        <div className="flex flex-col h-[560px] 2xl:h-[600px] space-y-2 overflow-hidden">
          <table className="min-w-full table-auto border-collapse">
            <thead className="border-b border-gray-300 dark:border-gray-500">
              <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-xs lg:text-sm font-semibold">
                <th className="py-3 px-4 text-start w-1/3">Profile</th>
                <th className="py-3 px-4 text-start">Phone Number</th>
                <th className="py-3 px-4 text-start">Location</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-none">
              {currentTableData.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 2xl:w-14 2xl:h-14 flex-shrink-0">
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={100}
                          height={100}
                          className="rounded-full object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="capitalize font-medium text-xs lg:text-base 2xl:text-lg text-gray-800 dark:text-gray-200 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 truncate">
                          {/* {user.email} */}
                          {isSupported
                            ? user.email
                            : `${user.email.substring(0, 8)}...`}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-xs lg:text-sm text-gray-700 dark:text-gray-300">
                    {user.telp}
                  </td>

                  <td className="py-3 px-4 text-xs lg:text-sm capitalize text-gray-700 dark:text-gray-300">
                    {user.location}
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border ${
                          user.status === true
                            ? " text-green-700 bg-green-300 dark:bg-green-900/20 dark:text-green-400"
                            : " text-gray-600 bg-gray-300 dark:bg-gray-800 dark:text-gray-400"
                        }`}
                      >
                        <Dot
                          className={`w-4 h-4 mr-1 ${
                            user.status ? "text-green-500" : "text-gray-400"
                          }`}
                        />
                        {user.status ? "Online" : "Offline"}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <div className="flex border border-gray-300 dark:border-gray-600 divide-x divide-gray-300 dark:divide-gray-600 rounded-md overflow-hidden">
                        <button
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Edit"
                        >
                          <SquarePen
                            size={20}
                            className="text-blue-600 dark:text-blue-400"
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

        {/* pagination */}
        <div className=" flex justify-between items-center pb-2">
          <p className="text-gray-500 text-sm">
            Showing data 1 to 7 of 256K entries
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
