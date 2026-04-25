import { useTheme } from "@/context/ThemeContext";
import { Bell, MoonIcon, PanelTopOpen, Star, SunIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Notification } from "../../../features/Notification/components/Notification";
import Link from "next/link";

export const InformationBar = ({
  lockedValue,
  onClick,
  modalAction,
}: {
  lockedValue: boolean;
  onClick: () => void;
  modalAction: () => void;
}) => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useRouter();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center justify-between border-gray-300 dark:border-gray-500 pt-2 pb-5 border-b ">
      <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
        {/* Sidebar Button */}
        <button onClick={onClick} className={`cursor-pointer `}>
          <PanelTopOpen
            className={`transition-all duration-200 hover:scale-110 ${
              lockedValue ? "rotate-90" : "-rotate-90"
            }`}
          />
        </button>
        <p className="font-semibold text-2xl capitalize">
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
        {/* Premium Button */}
        <button
          onClick={modalAction}
          className="flex items-center space-x-2 bg-sky-600/20 dark:bg-sky-600/20 px-6 py-2 rounded-sm text-sm text-sky-700 dark:text-sky-500 cursor-pointer transition-all duration-200 hover:scale-105"
        >
          <i>
            <Star size={20} className="fill-sky-700 dark:fill-sky-500" />
          </i>
          <span>Premium</span>
        </button>

        {/* Notification Button */}
        <Notification />

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="cursor-pointer text-gray-700 dark:text-gray-300  transition-all duration-200 hover:scale-110"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <Link href={"/profile"}>
          <Image
            src={"/images/profile.jpg"}
            width={100}
            height={100}
            alt="profile"
            className="w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
};
