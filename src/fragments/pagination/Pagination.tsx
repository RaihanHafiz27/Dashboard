import { ChevronLeft } from "lucide-react";

type PaginationType = "next" | "prev";

export const Pagination = ({
  currentPage,
  totalPages,
  handlePagination,
}: {
  currentPage: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}) => {
  const maxVisible = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex items-center px-2 py-1 space-x-2 text-xs">
      <BtnPag
        currentPage={currentPage}
        startPage={startPage}
        handlePagination={handlePagination}
        type="prev"
      />
      <div className="space-x-2">
        {pageNumbers.map((i) => (
          <button
            key={i}
            onClick={() => handlePagination(i)}
            className={`w-9 h-9 2xl:w-11 2xl:h-11  rounded-full hover:cursor-pointer transition-all duration-300 ${
              i === currentPage
                ? "bg-sky-600 text-white font-semibold shadow"
                : "text-gray-600 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
      <BtnPag
        currentPage={currentPage}
        endPage={endPage}
        handlePagination={handlePagination}
        type="next"
      />
    </div>
  );
};

const BtnPag = ({
  currentPage,
  startPage,
  endPage,
  handlePagination,
  type,
}: {
  currentPage: number;
  startPage?: number;
  endPage?: number;
  handlePagination: (page: number) => void;
  type: PaginationType;
}) => {
  return (
    <button
      onClick={
        type === "prev"
          ? () => handlePagination(currentPage - 1)
          : () => handlePagination(currentPage + 1)
      }
      disabled={
        type === "prev" ? currentPage === startPage : currentPage === endPage
      }
      className="w-9 h-9 2xl:w-11 2xl:h-11 p-1 border border-gray-300 hover:bg-gray-100 rounded-full grid place-items-center hover:cursor-pointer text-gray-600  transition disabled:cursor-not-allowed disabled:text-gray-400"
    >
      <ChevronLeft
        size={20}
        className={`${type === "next" ? "rotate-180" : ""}`}
      />
    </button>
  );
};
