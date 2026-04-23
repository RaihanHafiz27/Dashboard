/**
 * @module ProfileSlice
 * Manages user profile information, including password hashing simulation
 * and asynchronous data synchronization.
 */

import { supabase } from "@/lib/supabase/supabase";
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

interface ProfileState extends ProfileType {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
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
  status: "idle", // We add this for loading UI
  error: null,
};

/**
 * A thunk to simulate a profile update to the server.
 * Performs password hashing on the client side (for simulation purposes).
 */
export const updateProfileAsync = createAsyncThunk(
  "profile/updateProfileAsync",
  async (newData: ProfileType, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .upsert({
          id: 1,
          fullName: newData.fullName,
          userName: newData.userName,
          email: newData.email,
          password: newData.password,
          phoneNumber: newData.phoneNumber,
          dateOfBirth: newData.dateOfBirth,
          address: newData.address,
          profileImage: newData.profileImage,
          country: newData.country,
          city: newData.city,
          postalCode: newData.postalCode,
        })
        .select();

      return newData;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to process profile data");
    }
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loadPersistedProfile: (state) => {
      const saved = localStorage.getItem("simulated_profile");
      if (saved) {
        return { ...JSON.parse(saved), status: "idle", error: null };
      }
    },

    resetProfileStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileAsync.pending, (state) => {
        ((state.status = "loading"), (state.error = null));
      })
      .addCase(
        updateProfileAsync.fulfilled,
        (state, action: PayloadAction<ProfileType>) => {
          ((state.status = "succeeded"), Object.assign(state, action.payload));
        },
      )
      .addCase(updateProfileAsync.rejected, (state, action) => {
        ((state.status = "failed"), (state.error = action.payload as string));
      });
  },
});

export const { loadPersistedProfile, resetProfileStatus } =
  profileSlice.actions;
export default profileSlice.reducer;
