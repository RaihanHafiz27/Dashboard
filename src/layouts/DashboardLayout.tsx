import { Sidebar } from "@/fragments/Sidebar/Sidebar";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Bell, MoonIcon, PanelTopOpen, SunIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, toogleDarkMode } from "@/store/themeSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const DashboardLayout = ({ children }: { children: ReactElement }) => {
  const [isFull, setIsFull] = useState<boolean>(true);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const handleResize = () => {
      setIsSupported(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isSupported) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-2xl font-semibold mb-2">⚠️ Layar Terlalu Kecil</h1>
        <p className="text-gray-500">
          Dashboard ini hanya dapat diakses di perangkat dengan layar minimal
          ukuran tablet.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex border-2 border-pink-700 w-full  min-h-dvh h-auto ${
        isDarkMode ? "bg-gray-900" : "bg-gray-300"
      } md:min-h-screen ${plusJakarta.className} overflow-hidden`}
    >
      {/* Sidebar */}
      <Sidebar isFull={isFull} setIsFull={setIsFull} />
      {/* main content dashboard */}
      <main className="border-2 border-blue-600 grow p-4 2xl:p-8 space-y-4">
        <Information />
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

const Information = () => {
  // const { pathname } = useRouter();
  // console.log(pathname);
  const [dark, setDark] = useState(false);
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);

  console.log(isDarkMode);

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1 text-gray-700">
        <p>Pages / Dashboard</p>
        <p className="font-semibold text-xl ">Dashboard</p>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src={"/images/user.png"}
          width={200}
          height={200}
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-400"
        />
        <button disabled className="cursor-not-allowed">
          Sign In
        </button>
        <button
          onClick={
            isDarkMode
              ? () => dispatch(toogleDarkMode())
              : () => dispatch(setDarkMode(true))
          }
          className="cursor-pointer"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <button disabled className="relative cursor-not-allowed">
          <Bell />
          <span
            className="
          absolute -top-1 -right-1 
          flex items-center justify-center
          w-4 h-4 rounded-full 
          bg-red-600 text-white text-xs font-medium
        "
          >
            2
          </span>
        </button>
      </div>
    </div>
  );
};
