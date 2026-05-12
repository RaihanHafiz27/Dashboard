import { useSignInMutation } from "@/hooks/auth/useAuthMutation";
import { useState } from "react";

/**
 * Hook to manage the state and business logic for the Sign-In form.
 * Handles credential synchronization, validation check, and authentication mutation.
 * * @description
 * - Monitors form completion via `isFormValid`.
 * - Automatically resets the sign-in credentials upon successful authentication.
 */
export const useSigInForm = () => {
  const [formSignIn, setFormSignIn] = useState({
    email: "",
    password: "",
  });

  const { mutate, isPending } = useSignInMutation();

  const isFormValid = Object.values(formSignIn).every(
    (value) => value.trim() !== "",
  );

  const handleInputSignIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormSignIn((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(formSignIn, {
      onSuccess: () => {
        setFormSignIn({
          email: "",
          password: "",
        });
      },
    });
  };
  return {
    formSignIn,
    isPending,
    handleInputSignIn,
    isFormValid,
    handleSignIn,
  };
};
