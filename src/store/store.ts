import { Order } from "@/types/order.type";
import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";
import usersReducer from "./usersSlice";
import todosReducer from "./todosSlice";

// --- Configuration Store ---

export const store = configureStore({
  // merge all reducer in here
  reducer: {
    orders: ordersReducer,
    users: usersReducer,
    todos: todosReducer,
  },
});

// Define types for state and dispatch to make them easy to use in components.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
