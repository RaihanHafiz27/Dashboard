import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const data = [
  { id: 1, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 2, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 3, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 4, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 5, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 6, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 7, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 8, message: "lorem ipsum dolor amot sit amet", status: false },
  { id: 9, message: "lorem ipsum dolor amot sit amet", status: false },
];

const TaskPage = () => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    setTodos(data);
  }, []);

  const toggleTodo = (id: number) => {
    // const updateStatus = todos.find((item: any) =>
    //   item.id === id ? { ...todos, status: !item.status } : item
    // );
    // setTodos(updateStatus);
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  console.log(todos);

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button className="capitalize bg-sky-600 py-1.5 px-4 rounded-sm text-sm text-slate-200">
          add new task
        </button>
      </div>
      {/* <div className="space-y-4">
        {todos.map((item: any) => (
          <div
            key={item.id}
            className={`border border-gray-300 p-4 shadow-md rounded-sm ${
              item.status ? "bg-sky-600" : ""
            }`}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                onChange={() => toggleTodo(item.id)}
                checked={item.status}
                className="h-4 w-4"
              />
              <span className={item.status ? "line-through text-gray-400" : ""}>
                {item.message}
              </span>
            </label>
          </div>
        ))}
      </div> */}
      <div className="space-y-4">
        {todos.map((item: any) => (
          <div
            key={item.id}
            className={`border border-gray-300 p-4 shadow-md rounded-sm ${
              item.status ? "bg-sky-600/10" : "bg-white"
            }`}
          >
            <label className="flex items-center gap-3 cursor-pointer select-none">
              {/* Checkbox beneran (disembunyikan) */}
              <input
                type="checkbox"
                onChange={() => toggleTodo(item.id)}
                checked={item.status}
                className="peer hidden"
              />

              {/* Kotak custom */}
              <div
                className={`
            h-7 w-7 p-1.5 rounded border flex items-center justify-center transition
            ${
              item.status
                ? "border-blue-600 bg-blue-600"
                : "border-gray-400 bg-white"
            }
            peer-checked:border-blue-600 peer-checked:bg-blue-600
          `}
              >
                {/* Icon check */}
                <Check size={20} />
              </div>

              {/* Text */}
              <span
                className={`text-sm transition ${
                  item.status ? "line-through text-gray-400" : "text-gray-700"
                }`}
              >
                {item.message}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
