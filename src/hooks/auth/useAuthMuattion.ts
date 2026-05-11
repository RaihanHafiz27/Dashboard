import { showToast } from "@/lib/utils/toast";
import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";

/**
 * Handle user registration flow, notification, and automated navigation.
 * @description Shows email confirmation prompt and redirects to `/signin` after 2 seconds on success.
 */
export const useSignUpMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authService.signUp,
    onSuccess: () => {
      showToast.success("Please check your email for confirmation!");
      // Delayed redirect to allow user to read the toast
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    },
    onError: (error) => {
      showToast.error(error.message || "Register  Failed");
    },
  });
};
