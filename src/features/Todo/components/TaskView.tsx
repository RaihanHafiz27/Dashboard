import { ModalPremium } from "@/components/common/Modal/ModalPrem";
import { Todos } from "@/store/todosSlice";
import { Plus } from "lucide-react";
import Image from "next/image";
import { ListTodo } from "./ListTodo/ListTodo";

interface TaskViewProps {
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxWords: number;
  sortedTodos: Todos[];
  isOpenPrem: boolean;
  setIsOpenPrem: (val: boolean) => void;
}

export const TaskView = (props: TaskViewProps) => {
  const {
    handleSubmit,
    message,
    handleChange,
    maxWords,
    sortedTodos,
    isOpenPrem,
    setIsOpenPrem,
  } = props;

  return (
    <>
      {/* Header TODO */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          My Task
        </h3>
        <div>
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
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
      {/* Body TODO */}
      <div className="space-y-4 mt-6">
        {sortedTodos.length > 0 ? (
          // TODO LIST
          sortedTodos.map((item) => <ListTodo {...item} />)
        ) : (
          // EMPTY LIST
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
      {isOpenPrem && <ModalPremium setIsOpenPrem={setIsOpenPrem} />}
    </>
  );
};
