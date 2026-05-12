import { passwordValidation } from "@/features/Settings/utils/passwordValidation";
import { useSignUpMutation } from "@/hooks/auth/useAuthMutation";
import { showToast } from "@/lib/utils/toast";
import { useState } from "react";

/**
 * Hook to manage the state and business logic for the Sign-Up form.
 * Handles input synchronization, password strength validation, and form submission.
 * * @description
 * - Validates password matching and strength before mutation.
 * - Strips `confirmPassword` from the payload before sending to the server.
 * - Resets the form state upon successful registration.
 */
export const useSignUpForm = () => {
  const [formSignUp, setFormSignUp] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending } = useSignUpMutation();

  const validation = passwordValidation(formSignUp.password);

  const handleInputSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormSignUp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formSignUp.password !== formSignUp.confirmPassword) {
      return showToast.error("Passwords do not match.");
    }

    if (!validation.isValid) {
      const errorMessage = validation.errors[0] || "Please check your input.";
      return showToast.error(errorMessage);
    }

    const { confirmPassword, ...dataToSubmit } = formSignUp;

    mutate(dataToSubmit, {
      onSuccess: () => {
        setFormSignUp({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      },
    });
  };

  const isFormValid = Object.values(formSignUp).every(
    (value) => value.trim() !== "",
  );

  return {
    formSignUp,
    isPending,
    handleInputSignUp,
    handleSubmit,
    isFormValid,
  };
};
