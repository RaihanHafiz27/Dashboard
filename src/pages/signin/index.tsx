import { AuthLayout } from "@/layouts/AuthLayout";
import { NextPageWithLayout } from "../_app";
import { AuthInput } from "@/components/common/Input/AuthInput";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SignInPage: NextPageWithLayout = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  console.log(isShow);

  return (
    <form onSubmit={() => {}} className="grid grid-cols-1 gap-y-6">
      <AuthInput
        label="email address"
        name="email"
        type="email"
        placeholder="Enter your email address"
        maxLength={50}
        icon={<Mail size={22} strokeWidth={1.5} />}
      />
      <AuthInput
        label="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        maxLength={50}
        icon={<LockKeyhole size={22} strokeWidth={1.5} />}
        onClick={() => setIsShow(!isShow)}
        isShow={isShow}
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
      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 py-2 rounded-lg text-sm text-slate-200 transition-colors cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
};

SignInPage.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignInPage;
