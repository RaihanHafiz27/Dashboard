import { SearchBar } from "@/components/ui/Input/SearchBar";
import { SummaryUsers } from "@/features/Users/components/card/SummaryUsers";
import { Pagination } from "@/components/common/Pagination/Pagination";
import { Users } from "@/lib/utils/dummyUsers";
import { UsersTable } from "./table/UsersTable";
import { FilterDropdown } from "@/components/common/Dropdown/FilterDropdown";

interface UsersViewProps {
  // FILTER CONTROL
  filterValue: string | UsersStatus;
  onFilterChange: (val: string | UsersStatus) => void;

  // SEARCH CONTROL
  searchValue: string;
  onSearchChange: (val: string) => void;

  // PAGIANTION CONTROL
  currentPage: number;
  totalPages: number;
  handlePagination: (page: number) => void;

  // THE DATA
  data: Users[];
}

export type UsersStatus = "Online" | "Offline";

const userStatus: UsersStatus[] = ["Online", "Offline"];

export const UsersView = (props: UsersViewProps) => {
  const {
    filterValue,
    onFilterChange,
    searchValue,
    onSearchChange,
    currentPage,
    totalPages,
    handlePagination,
    data,
  } = props;

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
            <SearchBar value={searchValue} onChange={onSearchChange} />
            <FilterDropdown
              value={filterValue}
              options={userStatus}
              onChange={onFilterChange}
            />
          </div>
        </div>
        {/* Table Users */}
        <UsersTable data={data} />

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
