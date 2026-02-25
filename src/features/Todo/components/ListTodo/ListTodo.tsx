import { useAppDispatch } from "@/store/hooks";
import {
  deleteTodo,
  markingTodo,
  Todos,
  updateTodoStatus,
} from "@/store/todosSlice";
import { Check, Star, XCircleIcon } from "lucide-react";

export const ListTodo = (item: Todos) => {
  const dispatch = useAppDispatch();

  return (
    <div
      key={item.id}
      onClick={() => dispatch(updateTodoStatus({ id: item.id }))}
      className={`border border-gray-300 dark:border-gray-500 p-4 shadow-md rounded-sm flex items-center justify-between cursor-pointer hover:shadow-none group hover:translate-y-[2px] transition-all duration-300 ${
        item?.status ? "bg-sky-600/10" : "bg-slate-100 dark:bg-transparent"
      }`}
    >
      <label
        className="flex items-center gap-3 cursor-pointer select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hidden Checkbox*/}
        <input
          type="checkbox"
          onChange={() => dispatch(updateTodoStatus({ id: item.id }))}
          checked={item?.status}
          className="peer hidden"
        />

        {/* Custom Box */}
        <div
          className={`
            h-7 w-7 p-1.5 rounded border flex items-center justify-center transition
            ${
              item?.status
                ? "border-blue-600 bg-blue-600"
                : "border-gray-400 bg-slate-100 dark:bg-transparent"
            }
            peer-checked:border-blue-600 peer-checked:bg-blue-600 dark:peer-checked:bg-transparent dark:peer-checked:border-gray-300
          `}
        >
          {/* Icon check */}
          {item.status ? <Check size={20} color="#f1f5f9" /> : null}
        </div>

        {/* Text */}
        <span
          className={`text-sm transition-all duration-300 group-hover:pl-4 ${
            item?.status
              ? "line-through text-gray-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {item.message}
        </span>
      </label>
      {/* action button */}
      <div
        className="space-x-2 flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cursor-pointer text-gray-400"
          onClick={() => dispatch(markingTodo({ id: item.id }))}
        >
          <Star
            strokeWidth={1}
            className={`${
              item.mark
                ? "text-amber-400 fill-amber-400"
                : "text-gray-500 dark:text-gray-300"
            }`}
          />
        </button>
        <button
          className="cursor-pointer text-gray-500 dark:text-gray-300 hover:text-red-500"
          onClick={() => dispatch(deleteTodo({ id: item.id }))}
        >
          <XCircleIcon strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};
