import { ModalPremium } from "@/fragments/modals/ModalPrem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addTodos,
  deleteTodo,
  markingTodo,
  updateTodoStatus,
} from "@/store/todosSlice";
import { Check, Plus, Star, XCircleIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const TaskPage = () => {
  const todos = useAppSelector((state) => state.todos.data);
  const [isOpenPrem, setIsOpenPrem] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const maxWords = 10;
  const maxLetters = 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // counting word
    const words = value.trim().split(/\s+/);
    // check word count
    const isWordsLimitExceeded = words.length > maxWords;
    // check letter length
    const isLettersLimitExceeded = value.length > maxLetters;

    if (isWordsLimitExceeded || isLettersLimitExceeded) {
      toast.dismiss();
      toast.error(`Max ${maxWords} words and ${maxLetters} characters.`);
      return;
    } else {
      setError("");
    }
    setText(value);
  };

  const handleSubmit = () => {
    // Check empty input
    if (text.trim() === "") {
      toast.dismiss();
      toast.error("Input can't be empty!");
      return;
    }

    // Check error limit (words/characters)
    if (error) {
      toast.error(error);
      return;
    }

    // Check max todos
    if (todos.length >= 5) {
      setIsOpenPrem(true);
      return;
    }

    // Create object todo if everything valid
    const newTodo = {
      id: Date.now(),
      message: text,
      status: false,
      mark: false,
    };

    // Dispatch
    dispatch(addTodos(newTodo));

    // input cleaning
    setText("");
  };

  // func sorted todo
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.mark && !b.mark) return -1;
    if (!a.mark && b.mark) return 1;

    if (a.status === true && b.status === false) return 1;
    if (a.status === false && b.status === true) return -1;

    return 0;
  });

  console.log(todos);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          My Task
        </h3>
        <div>
          <form
            className="flex space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              // required
              type="text"
              value={text}
              onChange={handleChange}
              placeholder={`Max ${maxWords} words...`}
              className="bg-gray-200/10 dark:bg-transparent text-gray-600 dark:text-gray-300 placeholder:text-gray-500 border border-gray-400 dark:border-gray-500 p-2 w-full rounded-sm text-sm outline-none"
            />
            <button
              type="submit"
              className="border border-gray-400 dark:border-gray-500  p-1 rounded-sm  text-gray-500 dark:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <Plus strokeWidth={1} />
            </button>
          </form>
        </div>
      </div>
      <div className="space-y-4">
        {todos.length > 0 ? (
          sortedTodos.map((item: any) => (
            <div
              key={item.id}
              onClick={() => dispatch(updateTodoStatus({ id: item.id }))}
              className={`border border-gray-300 dark:border-gray-500 p-4 shadow-md rounded-sm flex items-center justify-between cursor-pointer hover:shadow-none transition-all duration-300 ${
                item?.status
                  ? "bg-sky-600/10"
                  : "bg-slate-100 dark:bg-transparent"
              }`}
            >
              <label
                className="flex items-center gap-3 cursor-pointer select-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hidden Checkbox*/}
                <input
                  type="checkbox"
                  // onChange={() => toggleTodo(item.id)}
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
                  className={`text-sm transition ${
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
          ))
        ) : (
          <div className="w-full h-[65vh] grid place-items-center">
            <div>
              <Image
                src={"/images/todo.svg"}
                width={300}
                height={300}
                alt="no-task"
                className="w-full h-auto 2xl:w-96"
              />
              <div className="space-y-2 text-center">
                <p className="font-semibold text-gray-700 dark:text-gray-300 text-xl 2xl:text-2xl">
                  Nothing to do Right Now.
                </p>
                <p className="text-gray-500 text-sm 2xl:text-base">
                  Create a task when you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Modal Premium */}
      <ModalPremium isOpenPrem={isOpenPrem} setIsOpenPrem={setIsOpenPrem} />
    </div>
  );
};

export default TaskPage;
