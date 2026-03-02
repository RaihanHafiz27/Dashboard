import { Trash2 } from "lucide-react";

export const ButtonRemove = () => {
  return (
    <button
      disabled
      className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:scale-103 active:scale-95 transition-all shadow-sm border border-red-100 dark:border-red-900/30 cursor-not-allowed"
      title="Delete Product"
    >
      <Trash2 size={18} />
    </button>
  );
};
