import { SquarePen } from "lucide-react";

export const ButtonEdit = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      // onClick={() => onClick(item.id)}
      disabled={!onClick}
      onClick={onClick}
      className={`p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:scale-103 active:scale-95 transition-all shadow-sm border border-blue-100 dark:border-blue-900/30 ${onClick ? "cursor-pointer" : "cursor-not-allowed"}`}
      title="Edit Product"
    >
      <SquarePen size={18} />
    </button>
  );
};
