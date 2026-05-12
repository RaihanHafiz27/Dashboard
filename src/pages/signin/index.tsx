import { AuthLayout } from "@/layouts/auth/AuthLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/common/Input/Input";
import { LockKeyhole, Mail } from "lucide-react";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { SignInView } from "@/features/SignIn/components/SignInView";
import { useSigInForm } from "@/features/SignIn/hooks/useSignInForm";

const SignInPage: NextPageWithLayout = () => {
  const {
    formSignIn,
    isPending,
    handleInputSignIn,
    isFormValid,
    handleSignIn,
  } = useSigInForm();

  const { toggle, visibility } = usePasswordVisibility(["password"]);

  return (
    <SignInView
      handleSignIn={handleSignIn}
      disabled={!isFormValid || isPending}
      isPending={isPending}
    >
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
