import { navLinks } from "@/constants/linksNav";
import { ChevronRight, PanelTopOpen, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Sidebar = ({
  isFull,
  setIsFull,
}: {
  isFull: boolean;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showMenu, setShowMenu] = useState<string | null>("dashboard");
  const router = useRouter();
  console.log(router);

  const toggleMenu = (menu: string) => {
    setShowMenu(showMenu === menu ? null : menu);
  };

  console.log(showMenu);

  return (
    <aside
      className={` text-slate-200 bg-gray-900 border-2 border-green-600 transition-all duration-300 ease-in-out p-2 space-y-4 ${
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
      <div className={`relative ${isFull ? "block" : "hidden"}`}>
        <input
          type="text"
          placeholder="Search for..."
          className="bg-slate-200/10 p-2 w-full rounded-sm text-sm cursor-not-allowed"
          disabled
        />
        <button
          className={`absolute top-2 right-2 cursor-not-allowed`}
          disabled
        >
          <Search size={20} />
        </button>
      </div>
      <nav>
        <ul className="grid grid-cols-1 gap-y-6 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`p-2 ${
                router.pathname === link.to
                  ? " rounded-sm border-l-4 border-sky-500 bg-gray-200/10"
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
                        color="#f8fafc"
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
                            ? "rounded-sm border-l-4 border-sky-500 bg-gray-200/10"
                            : ""
                        }`}
                      >
                        <Link href={sub.to} className="capitalize">
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.to ?? "#"}
                  onClick={() => setShowMenu(null)}
                  className={`flex items-center capitalize rounded-sm w-full `}
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
