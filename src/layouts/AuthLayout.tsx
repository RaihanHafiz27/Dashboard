import { ShieldCheck, UserRound, Zap } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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

export const AuthLayout = ({ children }: any) => {
  const iconsMap: Record<Icons, React.ReactNode> = {
    shield: <ShieldCheck size={20} strokeWidth={1.5} />,
    thunder: <Zap size={20} strokeWidth={1.5} />,
    person: <UserRound size={20} strokeWidth={1.5} />,
  };

  return (
    <div className={`flex flex-col w-full min-h-dvh ${plusJakarta.className}`}>
      <div className="flex-1 w-full h-full  grid grid-cols-2">
        <div className="relative flex flex-col justify-between bg-gradient-to-r from-blue-100 to-violet-200 p-8">
          <DecorationLayout />
          <div className="flex items-center gap-x-2">
            <Image
              src={"/images/logo1.png"}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
              className="w-12 h-auto"
            />
            <span className={`font-bold text-2xl text-gray-700 tracking-wide`}>
              Xyz
            </span>
          </div>
          <div className="">
            <h2 className="font-bold text-4xl text-gray-700 tracking-wide mb-2">
              Welcome <span className="text-violet-600">back!</span>
            </h2>
            <p className="text-sm font-medium text-gray-500 max-w-[370px] tracking-wide">
              Sign in to access your profile, manage your account, and stay
              conneted.
            </p>
          </div>
          <Image
            src={"/images/digital.svg"}
            alt="visual"
            width={100}
            height={100}
            className="w-80 h-auto mx-auto z-10"
          />
          <div className="grid grid-cols-3 gap-6 z-10">
            {quickInformation.map((item) => (
              <div key={item.id} className="flex gap-x-3">
                <div className="">
                  <div className="bg-slate-100 p-2 rounded-full text-violet-600">
                    {iconsMap[item.icon]}
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-[13px] tracking-wide capitalize text-violet-600 mb-1">
                    {item.label}
                  </p>
                  <p className="text-[11px] font-medium tracking-wide capitalize text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-14 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-y-6">
            <span className="text-end text-gray-600 font-medium text-sm">
              Don't have an account?{" "}
              <Link href={"/"} className="text-violet-600 font-semibold">
                Sign up
              </Link>
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Sign in to your account
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Enter your credentials to continue
              </p>
            </div>
          </div>
          <div className="">{children}</div>
          <div className="relative flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-6 shrink-0 text-sm text-gray-500 tracking-wider">
              or continue with
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="grid grid-cols-3 gap-x-4">
            {loginWith.map((item) => (
              <button
                type="button"
                key={item.id}
                className="border border-gray-300 p-2 flex items-center justify-center gap-x-2 rounded-lg hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={100}
                  height={100}
                  className="w-4 h-auto"
                />
                <p className="text-sm capitalize text-gray-700">{item.label}</p>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            By signing in, you agree to our{" "}
            <Link href={"#"} className="text-violet-600 font-semibold">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href={"#"} className="text-violet-600 font-semibold">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
    // <div className="w-full min-h-dvh  grid place-items-center">
    //   <div className="border-2 border-gray-200  max-w-4xl w-full grid grid-cols-2 rounded-lg divide-x-2 divide-gray-200 shadow-md">
    //     <div className="relative flex flex-col gap-y-4 bg-gradient-to-r from-blue-100 to-violet-200 p-8">
    //       <DecorationLayout />
    //       <div className="flex items-center gap-x-2">
    //         <Image
    //           src={"/images/logo1.png"}
    //           width={100}
    //           height={100}
    //           alt="logo"
    //           loading="lazy"
    //           className="w-12 h-auto"
    //         />
    //         <span className={`font-bold text-2xl text-gray-700 tracking-wide`}>
    //           Xyz
    //         </span>
    //       </div>
    //       <div className="space-y-2">
    //         <h2 className="font-bold text-3xl text-gray-700 tracking-wide">
    //           Welcome <span className="text-violet-600">back!</span>
    //         </h2>
    //         <p className="text-sm font-medium text-gray-500">
    //           Sign in to access your profile, manage your account, and stay
    //           conneted.
    //         </p>
    //       </div>
    //       <Image
    //         src={"/images/digital.svg"}
    //         alt="visual"
    //         width={100}
    //         height={100}
    //         className="w-64 h-auto mx-auto"
    //       />
    //       <p>Hellow</p>
    //     </div>
    //     <div className="p-8">
    //       <h1>Layouts</h1>
    //       <div>{children}</div>
    //     </div>
    //   </div>
    // </div>
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
