import { allDummyOrders } from "@/lib/dummyData";
import { Order, OrderStatus } from "@/types/order.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// define the type for state
interface OrderState {
  data: Order[];
}

// Determine the initial state.
// Use dummy data as default if there is no data in localStorage.
const initialState: OrderState = {
  data: allDummyOrders,
  // data: [],
};

// Create slice
export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  // define reducer action
  reducers: {
    // action for change all state (while load from localStorage)
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.data = action.payload;
    },
    // action to update a single status
    updateOrderStatus: (
      state,
      action: PayloadAction<{ orderId: string; newStatus: OrderStatus }>
    ) => {
      const { orderId, newStatus } = action.payload;
      const existingOrder = state.data.find((order) => order.id === orderId);
      if (existingOrder) {
        existingOrder.status = newStatus;
      }
    },
  },
});

// Export the action so it can be used in components
export const { setOrders, updateOrderStatus } = ordersSlice.actions;

// Export the reducer so it can be combine in the store
export default ordersSlice.reducer;
