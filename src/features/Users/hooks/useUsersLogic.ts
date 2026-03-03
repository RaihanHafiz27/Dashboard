import { usePagination } from "@/hooks/usePagination";
import { RootState } from "@/store/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { UsersStatus } from "../components/UsersView";

const ITEMS_PER_PAGE = 7;

export const useUsersLogic = () => {
  const users = useSelector((state: RootState) => state.users.data);

  const [statusFiltered, setStatusFiltered] = useState<string | UsersStatus>(
    "All",
  );
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return users.filter((item) => {
      // LOGIC SEARCH BY NAME DAN COUNTRY
      const queryLower = search.toLowerCase();
      const queryyMatch = search
        ? item.name.toLowerCase().includes(queryLower) ||
          item.location.toLowerCase().includes(queryLower)
        : true;

      // LOGIC FILTER BY STATUS
      const statusMatch =
        statusFiltered && statusFiltered !== "All"
          ? item.status === statusFiltered
          : true;

      return statusMatch && queryyMatch;
    });
  }, [users, statusFiltered, search]);

  const { currentData, currentPage, totalPages, goToPage } = usePagination(
    filteredData,
    ITEMS_PER_PAGE,
  );

  return {
    // FILTER CONTROL
    statusFiltered,
    setStatusFiltered,

    // SEARCH CONTROL
    search,
    setSearch,

    // PAGIANTION CONTROL
    currentPage,
    totalPages,
    handlePagination: goToPage,

    // THE DATA
    data: currentData,
  };
};
