import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import bcrypt from "bcryptjs";

// everything must be string
export interface ProfileType {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  profileImage: string | null;
  country: string;
  city: string;
  postalCode: string;
}

const initialState: ProfileType & {
  status: "idle" | "loading" | "succeeded" | "failed";
} = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
  phoneNumber: "",
  dateOfBirth: "",
  address: "",
  profileImage: "",
  country: "",
  city: "",
  postalCode: "",
  status: "idle", // Kita tambah ini untuk handle loading UI
};

export const updateProfileAsync = createAsyncThunk(
  "profile/updaterofileAsync",
  async (newData: ProfileType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let finalPassword = newData.password;
    if (newData.password) {
      const salt = bcrypt.genSaltSync(10);
      finalPassword = bcrypt.hashSync(newData.password, salt);
    }
    return { ...newData, password: finalPassword };
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileType>>) => {
      const updateData = { ...state, ...action.payload };

      localStorage.setItem("simulated_profile", JSON.stringify(updateData));

      return updateData;
    },
    loadPersistedProfile: (state) => {
      const saved = localStorage.getItem("simulated_profile");
      if (saved) return JSON.parse(saved);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateProfileAsync.fulfilled,
        (state, action: PayloadAction<ProfileType>) => {
          state.status = "succeeded";

          Object.assign(state, action.payload);

          alert("Update profile & Hashing success!");
        },
      )
      .addCase(updateProfileAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { updateProfile, loadPersistedProfile } = profileSlice.actions;
export default profileSlice.reducer;
