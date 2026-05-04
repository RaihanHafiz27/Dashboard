import { LucideIcon, ShieldCheck, UserRound, Zap } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Icons = "shield" | "thunder" | "person";

interface Quick {
  id: number;
  label: string;
  desc: string;
  icon: Icons;
}

const quickInformation: Quick[] = [
  {
    id: 1,
    label: "secure & private",
    desc: "your data is protected with enterprise-grade security.",
    icon: "shield",
  },
  {
    id: 2,
    label: "fast & easy",
    desc: "quick access to your profile and setting in just a few clicks.",
    icon: "thunder",
  },
  {
    id: 3,
    label: "personalized",
    desc: "manage your profile information and preferences easily.",
    icon: "person",
  },
];

const loginWith = [
  {
    id: 1,
    label: "google",
    icon: "/images/google.png",
  },
  {
    id: 2,
    label: "twitter",
    icon: "/images/twitter.png",
  },
  {
    id: 3,
    label: "microsoft",
    icon: "/images/microsoft.png",
  },
];

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
  return (
    <main className={`flex flex-col w-full min-h-dvh ${plusJakarta.className}`}>
      <div className="flex-1 w-full h-full  grid grid-cols-2">
        {/* LEFT SECTION */}
        <section className="relative flex flex-col justify-between bg-gradient-to-r from-blue-100 to-violet-200 md:p-8 2xl:p-10">
          <DecorationLayout />
          <header className="flex items-center gap-x-2 z-10">
            <Image
              src={"/images/logo1.png"}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
              className="md:w-12 2xl:w-16 h-auto"
            />
            <span
              className={`font-bold text-2xl 2xl:text-4xl text-gray-700 tracking-wide`}
            >
              Xyz
            </span>
          </header>
          <div className="">
            <h2 className="font-bold text-3xl 2xl:text-5xl text-gray-700 tracking-wide mb-2">
              {welomeTitle}
            </h2>
            <p className="text-sm 2xl:text-xl font-medium text-gray-500 md:max-w-[370px] 2xl:max-w-[550px] tracking-wide">
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
          <div className="grid grid-cols-3 gap-6 z-10">
            {quickInformation.map((item) => (
              <div key={item.id} className="flex gap-x-3">
                <div className="">
                  <div className="bg-white/50 backdrop-blur-sm p-2 rounded-xl w-fit h-fit shadow-sm">
                    <DynamicIcon name={item.icon} />
                  </div>
                </div>
                <div>
                  <p className="font-bold md:text-xs 2xl:text-sm tracking-wide capitalize text-violet-600 mb-1">
                    {item.label}
                  </p>
                  <p className="md:text-[10px] 2xl:text-xs font-medium tracking-wide capitalize text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
            {children}
            {/* OR Separator */}
            <div className="relative flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="mx-6 shrink-0 text-sm text-gray-500 tracking-wider">
                {separationText}
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="grid grid-cols-3 gap-x-4">
              {loginWith.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  disabled
                  className="border border-gray-300 p-2 flex items-center justify-center gap-x-2 rounded-lg hover:scale-105 transition-all duration-300 cursor-not-allowed"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={100}
                    height={100}
                    className="md:w-4 2xl:w-5 h-auto"
                  />
                  <p className="text-sm capitalize text-gray-700">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <footer className="text-sm text-gray-600 text-center">
            By signing {linkText === "Sign In" ? "up" : "in"}, you agree to our{" "}
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
  );
};

const DecorationLayout = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full h-[50%] pointer-events-none">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="w-full h-full  [mask-image:linear-gradient(to_bottom,black_20%,transparent_90%)]"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="5%" stopColor="#8ed1fc"></stop>
            <stop offset="95%" stopColor="#a684ff"></stop>
          </linearGradient>
        </defs>

        {/* LAYER 1 (DARI KIRI): Base Wave */}
        <path
          d="M 0,600 L 0,500 C 400,450 800,600 1440,550 L 1440,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.5"
        ></path>

        {/* LAYER 2 (DARI KIRI): Deep Sweep Left to Right */}
        <path
          d="M 0,0 C 300,100 800,300 1000,450 C 1200,600 1400,550 1440,600 L 0,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.4"
        ></path>

        {/* LAYER 3 (DARI KIRI): Main Front Wave Left to Right */}
        <path
          d="M 0,200 C 300,300 600,50 900,200 C 1200,350 1440,300 1440,600 L 0,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.8"
        ></path>

        {/* LAYER 4 (DARI KANAN): The Single Sweep (Si 1 yang di kanan) */}
        <path
          d="M 1440,50 C 1100,150 700,500 400,300 C 200,200 0,550 0,600 L 1440,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.4"
        ></path>
      </svg>
    </div>
  );
};

const ICON_MAP: Record<Icons, LucideIcon> = {
  shield: ShieldCheck,
  thunder: Zap,
  person: UserRound,
};

const DynamicIcon = ({
  name,
  classname,
}: {
  name: Icons;
  classname?: string;
}) => {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={`w-6 h-6 2xl:w-8 2xl:h-8 text-violet-600 ${classname}`}
      strokeWidth={1.5}
    />
  );
};
