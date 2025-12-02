import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todos = {
  id: number;
  message: string;
  status: boolean;
  mark: boolean;
};

interface TodosState {
  data: Todos[];
}

const initialState: TodosState = {
  data: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todos[]>) => {
      state.data = action.payload;
    },
    addTodos: (state, action: PayloadAction<Todos>) => {
      const existingTodo = state.data.find(
        (todo) => todo.id === action.payload.id
      );
      if (!existingTodo) {
        state.data.push(action.payload);
      }
    },
    updateTodoStatus: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const existingTodo = state.data.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.status = !existingTodo.status;
      }
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.data = state.data.filter((todo) => todo.id !== id);
    },
    markingTodo: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const existingTodo = state.data.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.mark = !existingTodo.mark;
      }
    },
  },
});

export const { setTodos, addTodos, updateTodoStatus, deleteTodo, markingTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
