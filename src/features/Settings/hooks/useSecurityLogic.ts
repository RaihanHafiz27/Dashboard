import { useMemo, useState } from "react";
import { passwordValidation } from "../utils/passwordValidation";
import { ProfileType, updateProfileAsync } from "@/store/profileSlice";
import bcrypt from "bcryptjs";
import { FormDataTypes } from "@/pages/settings";
import { useAppDispatch } from "@/store/hooks";

export const useSecurityLogic = (
  profileUser: ProfileType,
  formUser: FormDataTypes,
) => {
  const [securityForm, setSecurityForm] = useState({
    password: "",
    newPassword: "",
    currentPassword: "",
    confirmPassword: "",
  });

  const dispatch = useAppDispatch();

  const isFirstTimePassword = profileUser.password === "";
  // const isFirstTimePassword = false;

  const validation = useMemo(() => {
    const target = isFirstTimePassword
      ? securityForm.password
      : securityForm.newPassword;

    return passwordValidation(target);
  }, [securityForm.password, securityForm.newPassword, isFirstTimePassword]);

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

  return {
    securityForm,
    isFirstTimePassword,
    handleSecurityChange,
    validation,
    handleSecuritySave,
  };
};
