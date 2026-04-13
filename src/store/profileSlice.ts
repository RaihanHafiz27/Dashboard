import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: ProfileType = {
  fullName: "anna liebert",
  userName: "",
  email: "anna89@gmail.com",
  password: "121289",
  phoneNumber: "",
  dateOfBirth: "",
  address: "",
  profileImage: "",
  country: "",
  city: "",
  postalCode: "",
};

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
});

export const { updateProfile, loadPersistedProfile } = profileSlice.actions;
export default profileSlice.reducer;
