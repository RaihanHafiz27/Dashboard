import { allDummyUsers, Users } from "@/lib/utils/dummyUsers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  data: Users[];
}

const initialState: UsersState = {
  data: allDummyUsers,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Users[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
