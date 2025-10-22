import { Order } from "@/types/order.type";
import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";

// --- Section 1 logic localStorage ---
const STORAGE_KEY = "admin-order-storage";

// function for load the state from localStorage
export const loadState = (): Order[] | undefined => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn("Could not load state from localStorage", err);
    return undefined;
  }
};

// function for save the state to localStorage
const saveState = (orders: Order[]) => {
  try {
    const serializedState = JSON.stringify(orders);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.warn("Could not save state to localStorage", err);
  }
};

// --- Section 2 Configuration Store ---

// Retrieve the existing state (if any) when the application is loaded
// const persistedOrders = loadState();

export const store = configureStore({
  // merge all reducer in here
  reducer: {
    orders: ordersReducer,
  },
  // Tentukan state awal (preloadedState) dari localStorage
  // Jika persistedOrders adalah undefined, Redux akan otomatis pakai initialState dari slice
  // preloadedState: persistedOrders
  //   ? { orders: { data: persistedOrders } }
  //   : undefined,
});

// --- Section 3 Save changes ---

// Listen for every change in the store, and save it to localStorage
store.subscribe(() => {
  saveState(store.getState().orders.data);
});

// Define types for state and dispatch to make them easy to use in components.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
