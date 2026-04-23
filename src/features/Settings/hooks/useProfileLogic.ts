import { FormDataTypes } from "@/pages/settings";
import { useAppDispatch } from "@/store/hooks";
import { ProfileType, updateProfileAsync } from "@/store/profileSlice";
import { useEffect, useState } from "react";
import { fileToBase64 } from "../utils/fileToBase64";

/**
 * Hook to manage profile-related form logic, including image previews
 * and synchronization with the Redux store.
 * * @param profileUser - The current profile data from Redux state.
 * @returns Object containing form state, handlers, and submission logic.
 */
export const useProfileLogic = (profileUser: ProfileType) => {
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

  const dispatch = useAppDispatch();

  // Handle Image Preview & Memory Management
  useEffect(() => {
    const file = formUser.profileImage;
    if (!(file instanceof File)) {
      setProfilePreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setProfilePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [formUser.profileImage]);

  // Sync state with incoming props
  useEffect(() => {
    if (profileUser) {
      setFormUser({
        ...profileUser,
        profileImage: null, // Set it to null bcs the form is only for holding NEW files
      });
    }
  }, [profileUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
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
   * Final submission logic with Base64 conversion and Redux dispatch.
   */
  const handleProfileSave = async () => {
    try {
      let finalImage = profileUser.profileImage;

      if (formUser.profileImage instanceof File) {
        finalImage = await fileToBase64(formUser.profileImage);
      }

      await dispatch(
        updateProfileAsync({
          ...formUser,
          profileImage: finalImage,
        }),
      ).unwrap();

      alert("profile update succefully!!");
    } catch (error) {
      console.error("Fail to update profile :", error);
      alert("Upadte fail, please try again.");
    }
  };

  return {
    profilePreview,
    formUser,
    handleInputChange,
    handleImageChange,
    handleSelectedChange,
    handleSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      handleProfileSave();
    },
  };
};
