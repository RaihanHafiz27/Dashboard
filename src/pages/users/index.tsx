import { SummaryUsers } from "@/fragments/cards/SummaryUsers";
import { SearchBar } from "@/fragments/input/SearchBar";
import { Pagination } from "@/fragments/pagination/Pagination";
import { RootState } from "@/store/store";
import { Dot, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const ITEMS_PER_PAGE = 7;

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const users = useSelector((state: RootState) => state.users.data);

  // Logika "slice" pagination
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const currentTableData = users.slice(firstItemIndex, lastItemIndex);

  // Handler pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  console.log(users);

  return (
    <div className="space-y-6">
      <SummaryUsers />
      <div
        className={`w-full space-y-4  p-4 rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md `}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-300 text-xl">
            All Users
          </p>
          <div className="flex items-center space-x-4">
            <SearchBar isFull={true} />
            <button className="bg-sky-700 px-4 py-2 text-sm rounded-sm text-slate-200">
              Add user
            </button>
          </div>
        </div>
        {/* Table Users */}
        <div className="flex flex-col h-[560px] space-y-2  overflow-hidden">
          <table className="min-w-full overflow-hidden table-auto">
            <thead className="border-b border-gray-300 dark:border-gray-500">
              <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-sm">
                <th className="p-3 text-start">Profile</th>
                <th className="p-3 text-start">Phone Number</th>
                <th className="p-3 text-start">Location</th>
                <th className="p-3 ">Status</th>
                <th className="p-3 ">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 dark:divide-gray-500">
              {currentTableData.map((user) => (
                <tr key={user.id}>
                  <td className="p-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 ">
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={100}
                          height={100}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <p className="capitalize text-gray-700 dark:text-gray-300">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-3 lowercase text-gray-700 dark:text-gray-300 text-sm">
                    {user.telp}
                  </td>
                  <td className="p-3 text-gray-700 dark:text-gray-300 text-sm capitalize">
                    {user.location}
                  </td>
                  <td className="p-3 text-gray-700">
                    <span
                      className={`flex items-center justify-center py-1 rounded-sm border ${
                        user.status === true
                          ? "border-green-300 bg-green-100 dark:bg-transparent text-green-700 dark:text-green-500"
                          : "border-gray-300 bg-gray-100 dark:bg-transparent text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        <Dot className="w-3 h-3" />
                      </span>
                      <span className="text-sm font-medium">
                        {user.status === true ? "online" : "offline"}
                      </span>
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="border border-gray-400 dark:border-gray-500 grid grid-cols-2 divide-x divide-gray-400 py-1.5 rounded-md">
                      <button
                        className="flex justify-center cursor-not-allowed"
                        disabled
                      >
                        <SquarePen
                          size={20}
                          className="text-gray-700 dark:text-gray-300"
                        />
                      </button>
                      <button className="flex justify-center cursor-pointer">
                        <Trash2 color="#e7000b" size={20} />
                      </button>
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
