import { AuthLayout } from "@/layouts/auth/AuthLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/common/Input/Input";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import { SignUpView } from "@/features/SignUp/components/SignUpView";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { useSignUpForm } from "@/features/SignUp/hooks/useSignUpForm";

const SignUpPage: NextPageWithLayout = () => {
  const {
    formSignUp,
    isPending,
    handleInputSignUp,
    handleSubmit,
    isFormValid,
  } = useSignUpForm();

  const { visibility, toggle } = usePasswordVisibility([
    "password",
    "confirmPassword",
  ]);

  return (
    <SignUpView
      handleSubmit={handleSubmit}
      disabled={!isFormValid || isPending}
      isPending={isPending}
    >
      <Input
        label="full name"
        name="fullName"
        type="text"
        placeholder="Enter full name"
        value={formSignUp.fullName}
        maxLength={50}
        icon={<UserRound size={22} strokeWidth={1.5} />}
        onChange={handleInputSignUp}
      />
      <Input
        label="email address"
        name="email"
        type="email"
        placeholder="Enter email address"
        value={formSignUp.email}
        maxLength={50}
        icon={<Mail size={22} strokeWidth={1.5} />}
        onChange={handleInputSignUp}
      />
      <Input
        label="password"
        name="password"
        type="password"
        placeholder="Create a password"
        value={formSignUp.password}
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
        placeholder="Confirm password"
        value={formSignUp.confirmPassword}
        maxLength={50}
        icon={<LockKeyhole size={22} strokeWidth={1.5} />}
        isShow={visibility.confirmPassword}
        onClickToogle={() => toggle("confirmPassword")}
        disabled={formSignUp.password.length === 0}
        onChange={handleInputSignUp}
      />
    </SignUpView>
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
