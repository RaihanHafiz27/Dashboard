import { AnimatePresence, motion } from "motion/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Decoration } from "./Decoration";
import { QuickInfo } from "./QuickInfo";
import { SocialAuth } from "./SocialAuth";
import { MobileGuard } from "@/components/ui/MobileGuard/MobileGuard";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

interface AuthProps {
  children: ReactNode;
  containerClass: string;

  // left side
  welomeTitle: ReactNode;
  welcomeDesc: string;

  // right side
  formTitle: string;
  formSubsTitle: string;

  // navigation
  promptText: string;
  linkText: string;
  linkHref: string;

  // footer
  separationText: string;
}

export const AuthLayout = (props: AuthProps) => {
  const {
    children,
    containerClass,
    welomeTitle,
    welcomeDesc,
    formTitle,
    formSubsTitle,
    promptText,
    linkText,
    linkHref,
    separationText,
  } = props;

  const router = useRouter();

  return (
    <>
      {/* Only View on Mobile screen */}
      <MobileGuard />

      {/* Content only for large screen */}
      <main
        className={`hidden lg:flex flex-col w-full min-h-dvh ${plusJakarta.className}`}
      >
        <div className="flex-1 w-full h-full  grid grid-cols-2">
          {/* LEFT SECTION */}
          <section className="relative flex flex-col justify-between bg-gradient-to-r from-blue-100 to-violet-200 md:p-8 2xl:p-10">
            {/* DECORATION LAYER */}
            <Decoration />
            {/* LOGO SECTION */}
            <header className="flex items-center gap-x-2 z-10">
              <Image
                src={"/images/logo1.png"}
                width={100}
                height={100}
                alt="logo"
                className="md:w-12 2xl:w-14 h-auto"
                priority
              />
              <span
                className={`font-bold text-2xl 2xl:text-3xl text-gray-700 tracking-wide`}
              >
                Xyz
              </span>
            </header>
            <div className="z-10">
              <h2 className="font-bold text-3xl 2xl:text-5xl text-gray-700 tracking-wide mb-2">
                {welomeTitle}
              </h2>
              <p className="text-sm 2xl:text-xl font-medium text-gray-500 md:max-w-[370px] 2xl:max-w-[550px] tracking-wide leading-relaxed">
                {welcomeDesc}
              </p>
            </div>
            <Image
              src={"/images/digital.svg"}
              alt="visual"
              width={400}
              height={400}
              className="md:w-80 2xl:w-lg  h-auto mx-auto z-10 object-contain"
            />
            {/* QUICK INFORMATION */}
            <QuickInfo />
          </section>
          {/* RIGHT SECTION */}
          <section className="md:px-14 md:py-8 2xl:p-20 flex flex-col justify-between">
            <nav className="flex justify-end">
              <span className=" text-gray-600 font-medium md:text-sm 2xl:text-base">
                {promptText}{" "}
                <Link href={linkHref} className="text-violet-600 font-semibold">
                  {linkText}
                </Link>
              </span>
            </nav>
            <div
              className={`${containerClass} w-full mx-auto py-10 lg:py-0 flex flex-col md:gap-y-6 2xl:gap-y-10`}
            >
              <header>
                <h3 className="md:text-2xl 2xl:text-3xl font-semibold text-gray-700 mb-2">
                  {formTitle}
                </h3>
                <p className="md:text-sm 2xl:text-base font-medium text-gray-600">
                  {formSubsTitle}
                </p>
              </header>
              {/* FORM COMPONENT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={router.pathname}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
              {/* OR Separator */}
              <div className="relative flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-6 shrink-0 text-sm text-gray-500 tracking-wider">
                  {separationText}
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              {/* SOCIAL AUTH */}
              <SocialAuth />
            </div>
            {/* FOOTER SECTION */}
            <footer className="text-sm text-gray-600 text-center">
              By signing {router.pathname === "/signup" ? "up" : "in"}, you
              agree to our{" "}
              <span className="text-violet-600 font-semibold">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-violet-600 font-semibold">
                Privacy Policy
              </span>
              .
            </footer>
          </section>
        </div>
      </main>
    </>
  );
};
