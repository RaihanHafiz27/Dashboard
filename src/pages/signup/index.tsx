import { AuthLayout } from "@/layouts/AuthLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/common/Input/Input";
import { LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { useState } from "react";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { passwordValidation } from "@/features/Settings/utils/passwordValidation";
import { Button } from "@/components/common/Button/Button";

const SignUpPage: NextPageWithLayout = () => {
  const [formSignUp, setFormSignUp] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { visibility, toggle } = usePasswordVisibility([
    "password",
    "confirmPassword",
  ]);

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
    console.log(formSignUp);
  };

  const isValidForm = Object.values(formSignUp).every(
    (value) => value.trim() !== "",
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            label="full name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            maxLength={50}
            icon={<UserRound size={22} strokeWidth={1.5} />}
            onChange={handleInputSignUp}
          />
          <Input
            label="email address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            maxLength={50}
            icon={<Mail size={22} strokeWidth={1.5} />}
            onChange={handleInputSignUp}
          />
          <Input
            label="password"
            name="password"
            type="password"
            placeholder="Create a password"
            maxLength={50}
            icon={<LockKeyhole size={22} strokeWidth={1.5} />}
            isShow={visibility.password}
            onClickToogle={() => toggle("password")}
            onChange={handleInputSignUp}
          />

          <Input
            label="confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            maxLength={50}
            icon={<LockKeyhole size={22} strokeWidth={1.5} />}
            isShow={visibility.confirmPassword}
            onClickToogle={() => toggle("confirmPassword")}
            disabled={formSignUp.password.length === 0}
            onChange={handleInputSignUp}
          />
        </div>

        <div className="flex items-center w-full pt-3 gap-x-1 ">
          <ShieldCheck size={20} strokeWidth={1.5} className="text-green-500" />
          <span className="text-xs text-gray-500">
            Use 8+ characters with a mix of letters, capital, numbers & symbol.
          </span>
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex items-center gap-x-2 mb-4">
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
        <Button label="Create Account" type="submit" disabled={!isValidForm} />
        {/* <button
          type="submit"
          disabled={!isValidForm}
          className={`w-full bg-violet-600 hover:bg-violet-700 py-2 rounded-lg md:text-sm 2xl:text-base text-slate-200 transition-colors ${!isValidForm ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          Create Account
        </button> */}
      </div>
    </form>
  );
};

SignUpPage.getLayout = (page) => {
  return (
    <AuthLayout
      containerClass="max-w-lg"
      welomeTitle={
        <>
          Create your <span className="text-violet-600">account</span>
        </>
      }
      welcomeDesc="Join Xyz and manage your information, preferences, and security in one place."
      formTitle=" Sign up for your account"
      formSubsTitle="Fill in the information bellow to get started."
      promptText="Already have an account?"
      linkText="Sign In"
      linkHref="/signin"
      separationText="or sign up with"
    >
      {page}
    </AuthLayout>
  );
};

export default SignUpPage;
