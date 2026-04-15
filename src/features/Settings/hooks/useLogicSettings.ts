import { FormDataTypes } from "@/pages/settings";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  loadPersistedProfile,
  ProfileType,
  updateProfile,
  updateProfileAsync,
} from "@/store/profileSlice";
import { RootState } from "@/store/store";
import bcrypt from "bcryptjs";
import { City, Country } from "country-state-city";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { passwordValidation } from "../utils/passwordValidation";

/**
 * Custom hook to handle the logic for the Settings page.
 * Manages form state, synchronization with Redux, region selection (Country/City),
 * and profile photo upload handling.
 * * @returns {Object}
 * @property {string} choosedSection - The currently selected section (e.g., ‘edit profile’, ‘preferences’).
 * @property {Function} setChoosedSection - A function to change the active section.
 * @property {FormDataTypes} formUser - State object containing all user form input data.
 * @property {Function} handleInputChange - Handler for standard text input changes (fullName, email, etc.).
 * @property {Array<{value: string, title: string}>} countryOptions - List of country options retrieved from the country-state-city library.
 * @property {Function} handleSelectedChange - Handler for select inputs (Country/City) with automatic city reset logic.
 * @property {Array<{value: string, title: string}>} allCitiesOfCountry - List of city options filtered based on the selected country.
 * @property {Function} handleImageChange - Handler for processing image file inputs from the user’s device.
 * @property {string} profileImage - Image URL for display (retrieved from the new preview or old data in Redux).
 * @property {Function} handleSave - Main function for converting data and saving it to the Redux Store.
 */

export const useLogicSettings = () => {
  const [choosedSection, setChoosedSection] = useState<string>("edit profile");
  const [profilePreview, setProfilePreview] = useState<string>("");
  const [formUser, setFormUser] = useState<FormDataTypes>({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
    profileImage: null,
    postalCode: "",
    city: "",
    country: "",
  });

  // Form State for security password
  const [securityForm, setSecurityForm] = useState({
    password: "",
    newPassword: "",
    currentPassword: "",
    confirmPassword: "",
  });

  const { status } = useAppSelector((state: RootState) => state.profile);
  const profileUser = useAppSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();

  const isFirstTimePassword = profileUser.password === "";
  // const isFirstTimePassword = false;

  const validation = useMemo(() => {
    const target = isFirstTimePassword
      ? securityForm.password
      : securityForm.newPassword;

    return passwordValidation(target);
  }, [securityForm.password, securityForm.newPassword, isFirstTimePassword]);

  /**
   * An effect for managing image preview URLs.
   * Performs memory cleanup (revoke) every time the image changes
   * to prevent memory leaks.
   */
  useEffect(() => {
    if (!formUser.profileImage || !(formUser.profileImage instanceof File)) {
      setProfilePreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(formUser.profileImage);
    setProfilePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [formUser.profileImage]);

  useEffect(() => {
    if (profileUser) {
      setFormUser({
        ...profileUser,
        profileImage: null, // Set it to null bcs the form is only for holding NEW files
      });
    }
  }, [profileUser]);

  useEffect(() => {
    dispatch(loadPersistedProfile());
  }, [dispatch]);

  // GET COUNTRY AND CITY OPTIONS VALUE
  const allCountries = Country.getAllCountries();

  const countryOptions = useMemo(() => {
    return allCountries.map((country) => ({
      value: country.isoCode,
      title: country.name,
    }));
  }, []);

  const cityOptions = useMemo(() => {
    if (!formUser.country) return [];
    const citiesOfCountry = City.getCitiesOfCountry(formUser.country);
    return citiesOfCountry?.map((city) => ({
      value: `${city.name}-${city.latitude}`,
      title: city.name,
    }));
  }, [formUser.country]);

  /**
   * Handles dynamic changes to text inputs.
   * @param name - Field name (matches the key in FormDataType)
   * @param value - New value of the input
   */
  const handleInputChange = (name: string, value: string) => {
    setFormUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectedChange = (name: string, value: string) => {
    setFormUser((prev) => ({
      ...prev,
      [name]: value,
      // Additional logic : If the country changes, clear the city
      ...(name === "country" ? { city: "" } : {}),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormUser((prev) => ({
        ...prev,
        profileImage: file,
      }));
    }
  };

  /**
   * Saves profile data to Redux and LocalStorage (via a reducer).
   * Converts the file to Base64 if the photo changes.
   */
  const handleSave = () => {
    const file = formUser.profileImage;

    // SCENARIO 1: User ganti foto profil baru
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;

        // PANGGIL THUNK DI SINI
        dispatch(
          updateProfileAsync({
            ...formUser,
            profileImage: base64String, // Gambar jadi string base64
          }),
        );
      };
      reader.readAsDataURL(file);
    }

    // SCENARIO 2: User tidak ganti foto, cuma ganti teks/password
    else {
      dispatch(
        updateProfileAsync({
          ...formUser,
          // Tetap pakai gambar lama yang ada di Redux (tipenya string)
          profileImage: profileUser.profileImage,
        }),
      );
    }
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSecurityForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecuritySave = async () => {
    const { password, newPassword, currentPassword, confirmPassword } =
      securityForm;

    const targetPassword = isFirstTimePassword ? password : newPassword;
    const validation = passwordValidation(targetPassword);

    // if (!validation.isValid) {
    //   return alert(`Password weak: ${validation.errors.join(", ")}`);
    // }

    if (!isFirstTimePassword) {
      if (!currentPassword) {
        return alert("Please enter your current password!");
      }

      if (!newPassword) {
        return alert("Please enter your new password!");
      }

      if (!confirmPassword) {
        return alert("Please confirm your new password!");
      }

      const isMatch = bcrypt.compareSync(currentPassword, profileUser.password);

      if (!isMatch) {
        return alert("current password is incorrect!");
      }

      if (newPassword === currentPassword) {
        return alert(
          "New password cannot be the same as the current password!",
        );
      }

      if (newPassword !== confirmPassword) {
        return alert("Confirmation password does not match!");
      }

      alert("success!!");
    } else {
      if (!password) {
        return alert("Please enter your password!");
      }

      if (!confirmPassword) {
        return alert("Please confirm your password!");
      }

      if (password !== confirmPassword) {
        return alert("Confirmation password does not match!");
      }
    }

    try {
      const dataToSave: ProfileType = {
        ...formUser,
        profileImage: profileUser.profileImage,
        password: targetPassword,
      };

      // Eksekusi Dispatch
      await dispatch(updateProfileAsync(dataToSave)).unwrap();

      // Reset Form Local
      setSecurityForm({
        currentPassword: "",
        password: "",
        newPassword: "",
        confirmPassword: "",
      });

      alert("Security settings updated successfully!");
    } catch (error) {
      console.error("Failed to update security:", error);
      alert("Something went wrong while saving.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  return {
    choosedSection,
    setChoosedSection,
    formUser,
    handleInputChange,
    countryOptions,
    handleSelectedChange,
    allCitiesOfCountry: cityOptions,
    handleImageChange,
    profileImage: profilePreview ? profilePreview : profileUser.profileImage,
    handleSubmit,
    securityForm,
    isFirstTimePassword,
    handleSecurityChange,
    validation,
    handleSecuritySave,
  };
};
