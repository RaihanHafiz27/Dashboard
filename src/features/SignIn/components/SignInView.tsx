import { Button } from "@/components/common/Button/Button";
import Link from "next/link";
import { ReactNode } from "react";

interface SignInViewProps {
  handleSignIn: (e: React.FormEvent) => void;
  children: ReactNode;
  disabled: boolean;
  isPending: boolean;
}

export const SignInView = (props: SignInViewProps) => {
  const { handleSignIn, children, disabled, isPending } = props;

  return (
    <form onSubmit={handleSignIn} className="grid grid-cols-1 gap-y-6">
      {children}
      <div className="flex flex-col gap-y-2">
        <Link
          href={"#"}
          className="text-end text-violet-600 hover:text-violet-700 transition-colors text-sm font-semibold"
        >
          Forgot password?
        </Link>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" disabled className="cursor-not-allowed" />
          <label htmlFor="" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>
      </div>
      <Button
        label="Sign In"
        type="submit"
        disabled={disabled}
        isPending={isPending}
      />
    </form>
  );
};
