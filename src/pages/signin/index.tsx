import { AuthLayout } from "@/layouts/auth/AuthLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/common/Input/Input";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/common/Button/Button";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { SignInView } from "@/features/SignIn/components/SignInView";
import { showToast } from "@/lib/utils/toast";

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
    if (formSignIn.password !== "123")
      return showToast.error("Your password is incorrect.");

    try {
      showToast.success("Login Success.");
      setFormSignIn({
        email: "",
        password: "",
      });
    } catch (error) {
      showToast.error("Something went wrong. Please try again.");
    }

    console.log(formSignIn);
  };

  return (
    <SignInView handleSignIn={handleSignIn} disabled={!isValidForm}>
      <Input
        label="email address"
        name="email"
        type="email"
        placeholder="Enter your email address"
        maxLength={50}
        icon={<Mail size={22} strokeWidth={1.5} />}
        value={formSignIn.email}
        onChange={handleInputSignIn}
      />
      <Input
        label="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        maxLength={50}
        icon={<LockKeyhole size={22} strokeWidth={1.5} />}
        value={formSignIn.password}
        onChange={handleInputSignIn}
        onClickToogle={() => toggle("password")}
        isShow={visibility.password}
      />
    </SignInView>
  );
};

SignInPage.getLayout = (page) => {
  return (
    <AuthLayout
      containerClass="max-w-lg"
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
