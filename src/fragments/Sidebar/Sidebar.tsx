import { navLinks } from "@/constants/linksNav";
import { ChevronRight, PanelTopOpen, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SearchBar } from "../input/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useAppSelector } from "@/store/hooks";

export const Sidebar = ({
  isFull,
  setIsFull,
}: {
  isFull: boolean;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showMenu, setShowMenu] = useState<string | null>("dashboard");
  const router = useRouter();
  const darkmode = useAppSelector((state) => state.theme.darkMode);

  const toggleMenu = (menu: string) => {
    setShowMenu(showMenu === menu ? null : menu);
  };

  console.log(darkmode);

  return (
    <aside
      className={` text-gray-700 dark:text-slate-200  transition-all duration-300 ease-in-out px-2 pt-4 space-y-6 ${
        isFull ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 p-1">
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="logo"
            loading="lazy"
            className="w-9 h-auto"
          />
          {/* {darkmode ? (
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
              className="w-9 h-auto"
            />
          ) : (
            <Image
              src={"/images/logo-light.png"}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
              className="w-9 h-auto"
            />
          )} */}
          <span className={`${isFull ? "blcok" : "hidden"} text-2xl`}>Xyz</span>
        </div>
        <button
          onClick={() => setIsFull(!isFull)}
          className={`cursor-pointer ${isFull ? "block" : "hidden"}`}
        >
          <PanelTopOpen
            className={`transition-all duration-300 ${
              isFull ? "rotate-90" : "-rotate-90"
            }`}
          />
        </button>
      </div>
      <div className={`px-2 ${isFull ? "hidden" : "block"}`}>
        <button
          onClick={() => setIsFull(!isFull)}
          className={`cursor-pointer `}
        >
          <PanelTopOpen
            className={`transition-all duration-300 ${
              isFull ? "rotate-90" : "-rotate-90"
            }`}
          />
        </button>
      </div>
      {/* Search Bar */}
      <SearchBar isFull={isFull} />
      <nav>
        <ul className="grid grid-cols-1 gap-y-6 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`p-2 text-sm ${
                router.pathname === link.to
                  ? " rounded-sm border-l-4 border-sky-500 bg-primary/10 dark:bg-gray-200/10"
                  : ""
              }`}
            >
              {link.subs && link.subs.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleMenu(link.title)}
                    className={`flex items-center justify-between  capitalize rounded-sm cursor-pointer w-full ${
                      showMenu === link.title ? "text-sky-500" : ""
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <i>{link.icon}</i>
                      <span className={`${isFull ? "block" : "hidden"}`}>
                        {link.title}
                      </span>
                    </span>
                    <i>
                      <ChevronRight
                        color="#364153"
                        className={`transition-all duration-300 ${
                          showMenu === link.title ? "rotate-90" : "rotate-0"
                        } ${isFull ? "block" : "hidden"}`}
                      />
                    </i>
                  </button>
                  <ul
                    className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      showMenu === link.title
                        ? "max-h-40 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    } ${isFull ? "block" : "hidden"}`}
                  >
                    {link?.subs?.map((sub) => (
                      <li
                        key={sub.title}
                        className={`p-2 ${
                          router.pathname === sub.to
                            ? "rounded-sm border-l-4 border-sky-500 bg-primary/10"
                            : ""
                        }`}
                      >
                        <Link
                          href={link.status === "inactive" ? "#" : sub.to}
                          onClick={(e) => {
                            if (link.status === "inactive") {
                              e.preventDefault();
                            }
                          }}
                          className={`capitalize ${
                            link.status === "inactive"
                              ? "cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.status === "inactive" ? "#" : link.to ?? "#"}
                  onClick={(e) => {
                    if (link.status === "inactive") {
                      e.preventDefault();
                    }
                    setShowMenu(null);
                  }}
                  className={`flex items-center capitalize rounded-sm w-full ${
                    link.status === "inactive" ? "cursor-not-allowed" : ""
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <i>{link.icon}</i>
                    <span className={`${isFull ? "block" : "hidden"}`}>
                      {link.title}
                    </span>
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
