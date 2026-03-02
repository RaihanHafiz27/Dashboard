import { SearchBar } from "@/components/ui/Input/SearchBar";
import { SummaryUsers } from "@/features/Users/components/card/SummaryUsers";
import { Pagination } from "@/components/common/Pagination/Pagination";
import { Users } from "@/lib/utils/dummyUsers";
import { UsersTable } from "./table/UsersTable";
import { UsersStatusFilter } from "./dropdown/UsersStatusFilter";

interface UsersViewProps {
  // Pagination Action & State
  handlePagination: (page: number) => void;
  currentTableData: Users[];
  currentPage: number;
  totalPages: number;
}

export const UsersView = (props: UsersViewProps) => {
  const { currentTableData, currentPage, totalPages, handlePagination } = props;

  return (
    <>
      <SummaryUsers />
      <div
        className={`w-full space-y-6 mt-6 p-4 rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md `}
      >
        <div className="flex justify-between items-center pt-2">
          <p className="font-semibold text-gray-700 dark:text-gray-300 text-xl">
            All Users
          </p>
          <div className="grid grid-cols-2 gap-x-2">
            <SearchBar />
            <UsersStatusFilter selected="abc" open={false} />
          </div>
        </div>
        {/* Table Users */}
        <UsersTable data={currentTableData} />

        {/* pagination */}
        <div className=" flex justify-between items-center pb-2">
          <p className="text-gray-500 text-sm">
            Showing data 1 to 7 of 125k entries
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        </div>
      </div>
    </>
  );
};
