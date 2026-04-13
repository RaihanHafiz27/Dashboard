import { FormDataTypes } from "@/pages/settings";
import { loadPersistedProfile, updateProfile } from "@/store/profileSlice";
import { RootState } from "@/store/store";
import { City, Country } from "country-state-city";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  const profileUser = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

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
        profileImage: null, // We set it to null because the form is only for holding NEW files
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

    if (file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;

        dispatch(
          updateProfile({
            ...formUser,
            profileImage: base64String,
          }),
        );
        alert("Update success!");
      };
      reader.readAsDataURL(file);
    } else {
      dispatch(
        updateProfile({
          ...formUser,
          profileImage: profileUser.profileImage, // used oldest data
        }),
      );
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
  };
};
