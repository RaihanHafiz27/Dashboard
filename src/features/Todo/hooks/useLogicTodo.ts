import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTodos } from "@/store/todosSlice";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

export const useLogicTodo = () => {
  const todos = useAppSelector((state) => state.todos.data);
  const [isOpenPrem, setIsOpenPrem] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const maxWords = 10;
  const maxLetters = 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

    if (wordCount > maxWords || value.length > maxLetters) {
      toast.dismiss();
      toast.error(`Limit: ${maxWords} words / ${maxLetters} chars`);
      return;
    }
    setMessage(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.dismiss();
      toast.error("Input is empty!");
      return;
    }

    if (todos.length >= 5) return setIsOpenPrem(true);

    dispatch(addTodos(message));
    setMessage("");
  };

  // Sorting Todo
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => {
      if (a.mark !== b.mark) return a.mark ? -1 : 1;
      if (a.status !== b.status) return a.status ? 1 : -1;
      return 0;
    });
  }, [todos]);

  return {
    handleChange,
    message,
    handleSubmit,
    maxWords,
    sortedTodos,
    isOpenPrem,
    setIsOpenPrem,
  };
};
