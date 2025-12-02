import { Sidebar } from "@/fragments/Sidebar/Sidebar";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Bell, MoonIcon, PanelTopOpen, Star, SunIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, toogleDarkMode } from "@/store/themeSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import path from "path";
import { SearchBar } from "@/fragments/input/SearchBar";

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
      className={`flex w-full  min-h-dvh h-auto ${
        isDarkMode ? "bg-gray-900" : "bg-slate-100"
      } md:min-h-screen ${plusJakarta.className} overflow-hidden`}
    >
      {/* Sidebar */}
      <Sidebar isFull={isFull} setIsFull={setIsFull} />
      {/* main content dashboard */}
      <main className="border-l border-gray-300 dark:border-gray-500 grow p-4 2xl:p-8 space-y-8">
        <Information />
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

const Information = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);
  const { pathname } = useRouter();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center justify-between border-gray-300 dark:border-gray-500 pt-2 pb-5 border-b">
      <div className="flex items-center space-x-4">
        <p className="font-semibold text-2xl text-gray-700 dark:text-gray-300 capitalize">
          {pathname === "/dashboard"
            ? "Dashboard"
            : `${
                segments[0] !== "404"
                  ? `${segments.length > 1 ? segments[1] : segments[0]}`
                  : `${segments[0]} - Not Found`
              }`}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          disabled
          className="cursor-not-allowed flex items-center space-x-2 bg-sky-600/20 dark:bg-sky-600/20 px-6 py-1.5 rounded-sm text-sm text-sky-700 dark:text-sky-500"
        >
          <i>
            <Star size={20} className="fill-sky-700 dark:fill-sky-500" />
          </i>
          <span>Premium</span>
        </button>
        <button
          onClick={
            isDarkMode
              ? () => dispatch(toogleDarkMode())
              : () => dispatch(setDarkMode(true))
          }
          className="cursor-pointer text-gray-700 dark:text-gray-300"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          disabled
          className="relative cursor-not-allowed text-gray-700 dark:text-gray-300"
        >
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
        <Image
          src={"/images/profile.jpg"}
          width={100}
          height={100}
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};
