import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { UsersView } from "@/features/Users/components/UsersView";
import { usePagination } from "@/hooks/usePagination";

const ITEMS_PER_PAGE = 7;

const UsersPage = () => {
  const users = useSelector((state: RootState) => state.users.data);

  const { currentData, currentPage, totalPages, goToPage } = usePagination(
    users,
    ITEMS_PER_PAGE,
  );

  return (
    <UsersView
      currentTableData={currentData}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePagination={goToPage}
    />
  );
};

export default UsersPage;
