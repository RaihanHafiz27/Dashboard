import { Button } from "@/components/common/Button/Button";
import { ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

interface SignUpViewProps {
  handleSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
  disabled: boolean;
}

export const SignUpView = (props: SignUpViewProps) => {
  const { handleSubmit, children, disabled } = props;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <div className="grid grid-cols-2 gap-6">{children}</div>

        <div className="flex items-center w-full pt-3 gap-x-1 ">
          <ShieldCheck size={20} strokeWidth={1.5} className="text-green-500" />
          <span className="text-xs text-gray-500">
            Use 8+ characters with a mix of letters, capital, numbers & symbol.
          </span>
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex items-center gap-x-2 mb-5">
          <input type="checkbox" disabled className="cursor-not-allowed" />
          <label htmlFor="" className="text-sm text-gray-600">
            I agree to the{" "}
            <span className="text-violet-600 font-semibold">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-violet-600 font-semibold">
              Privacy Policy
            </span>
            .
          </label>
        </div>
        <Button label="Create Account" type="submit" disabled={disabled} />
      </div>
    </form>
  );
};
