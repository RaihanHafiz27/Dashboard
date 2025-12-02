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
                  Create a task when you're ready.
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

const prof = [
  "/images/woman-2.png",
  "/images/man-1.png",
  "/images/man-2.png",
  "/images/woman-6.png",
];

const ModalPremium = ({
  isOpenPrem,
  setIsOpenPrem,
}: {
  isOpenPrem: boolean;
  setIsOpenPrem: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isOpenPrem) return null;

  return (
    <div className="bg-black/40 fixed inset-0 z-50 grid place-items-center">
      <div className="bg-sky-100 dark:bg-gray-800 w-96 h-[80vh] 2xl:h-[60vh] py-2 rounded-4xl flex flex-col">
        <div className="grow flex flex-col justify-center items-center p-6 space-y-6">
          <Image
            src={"/images/sparkle.png"}
            alt="sparkle"
            width={500}
            height={500}
            className="w-1/4 h-auto"
          />
          <div className="text-center space-y-2">
            <h2 className="text-2xl text-gray-700 dark:text-gray-300">
              Greate find! You've unlocked a premium feature!
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Upgrade to enjoy all the extra features.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-500 w-full flex py-2 px-1 rounded-md">
            <div className="relative flex items-center w-28 h-10">
              {prof.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  width={100}
                  height={100}
                  alt="friends"
                  className="w-9 h-9 rounded-2xl absolute left-0"
                  style={{ left: `${index * 23}px` }} // jarak tumpang tindih
                />
              ))}
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                +5 Friend are already premium!
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enhance your experience now
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-4">
            <button
              disabled
              className="bg-sky-600 hover:bg-sky-700 text-slate-200 py-2 rounded-2xl cursor-not-allowed"
            >
              Upgrade
            </button>
            <button
              onClick={() => setIsOpenPrem(!isOpenPrem)}
              className="text-sky-600 hover:text-sky-700 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="bg-sky-600  h-1.5 w-1/2 mx-auto rounded-md"></div>
      </div>
    </div>
  );
};

export default TaskPage;
