import { AuthLayout } from "@/layouts/AuthLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/common/Input/Input";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/common/Button/Button";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";

const SignInPage: NextPageWithLayout = () => {
  const [formSignIn, setFormSignIn] = useState({
    email: "",
    password: "",
  });

  const { toggle, visibility } = usePasswordVisibility(["password"]);

  const isValidForm = Object.values(formSignIn).every(
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
    console.log(formSignIn);
  };

  return (
    <form onSubmit={handleSignIn} className="grid grid-cols-1 gap-y-6">
      <Input
        label="email address"
        name="email"
        type="email"
        placeholder="Enter your email address"
        maxLength={50}
        icon={<Mail size={22} strokeWidth={1.5} />}
        onChange={handleInputSignIn}
      />
      <Input
        label="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        maxLength={50}
        icon={<LockKeyhole size={22} strokeWidth={1.5} />}
        onChange={handleInputSignIn}
        onClickToogle={() => toggle("password")}
        isShow={visibility.password}
      />
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
      <Button label="Sign In" type="submit" disabled={!isValidForm} />

      {/* <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 py-2 rounded-lg md:text-sm 2xl:text-base text-slate-200 transition-colors cursor-pointer"
      >
        Sign In
      </button> */}
    </form>
  );
};

SignInPage.getLayout = (page) => {
  return (
    <AuthLayout
      containerClass="max-w-md"
      welomeTitle={
        <>
          Welcome <span className="text-violet-600">back!</span>
        </>
      }
      welcomeDesc="Sign in to access your profile, manage your account, and stay connected."
      formTitle=" Sign in to your account"
      formSubsTitle="Enter your credentials to continue"
      promptText="Don't have an account?"
      linkText="Sign Up"
      linkHref="/signup"
      separationText="or continue with"
    >
      {page}
    </AuthLayout>
  );
};

export default SignInPage;
