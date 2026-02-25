import { TaskView } from "@/features/Todo/components/TaskView";
import { useLogicTodo } from "@/features/Todo/hooks/useLogicTodo";

const TaskPage = () => {
  const logicTodo = useLogicTodo();

  return <TaskView {...logicTodo} />;
};

export default TaskPage;
