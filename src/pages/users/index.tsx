import { UsersView } from "@/features/Users/components/UsersView";
import { useUsersLogic } from "@/features/Users/hooks/useUsersLogic";

const UsersPage = () => {
  const { statusFiltered, setStatusFiltered, search, setSearch, ...restLogic } =
    useUsersLogic();

  return (
    <UsersView
      filterValue={statusFiltered}
      onFilterChange={setStatusFiltered}
      searchValue={search}
      onSearchChange={setSearch}
      {...restLogic}
    />
  );
};

export default UsersPage;
