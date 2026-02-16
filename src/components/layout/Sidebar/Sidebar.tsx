import { navLinks } from "@/constants/linksNav";
import { ChevronRight, LogOut, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SearchBar } from "../../ui/Input/SearchBar";
import { NavLinks } from "@/types/navLinks.type";
import { usePathname } from "next/navigation";

export const Sidebar = ({ isLocked }: { isLocked: boolean }) => {
  const [showMenu, setShowMenu] = useState<string | null>(null);
  // State for hover sidebar
  const [isHovered, setIsHovered] = useState(false);

  // Combined Logic: Sidebar opens when locked OR hovered over
  const isSidebarOpen = isLocked || isHovered;

  // Accordion Logic: When menu A is clicked, menu B closes.
  const handleToggleMenu = (title: string) => {
    setShowMenu((prev) => (prev === title ? null : title));
  };
  return (
    <aside
      // Event Handler for Hover Sidebar
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hidden lg:flex flex-col h-full overflow-hidden text-gray-700 dark:text-slate-200  transition-all duration-300 ease-in-out px-2 py-4 space-y-4 ${
        isSidebarOpen ? "w-60" : "w-16"
      }`}
    >
      {/* HEADER LOGO */}
      <div className="flex items-center shrink-0 pl-2">
        <Image
          src={"/images/logo.png"}
          width={100}
          height={100}
          alt="logo"
          loading="lazy"
          className="w-9 h-auto"
        />
        <span
          className={`${isSidebarOpen ? "blcok" : "hidden"} font-bold text-xl ml-2`}
        >
          Xyz
        </span>
      </div>

      {/* SEARCH BAR */}
      {isSidebarOpen ? (
        <SearchBar
          classname={`
            transition-all duration-300
            ${isSidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none hidden"}
          `}
        />
      ) : (
        <div className="mx-auto p-2">
          <Search size={20} className="text-gray-700 dark:text-slate-300" />
        </div>
      )}
      {/* MENU LIST */}
      <nav className="flex-1 overflow-y-auto no-scrollbar">
        <ul className="flex flex-col gap-y-2 py-2">
          {navLinks.map((link) => (
            <SidebarItem
              key={link.id}
              item={link}
              isOpen={isSidebarOpen}
              isExpanded={showMenu === link.title}
              onToggle={() => handleToggleMenu(link.title)}
            />
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="shrink-0 p-2 ">
        <button
          className="flex items-center space-x-2 text-gray-600 dark:text-slate-200 cursor-not-allowed"
          disabled
        >
          <span className="shrink-0">
            <LogOut />
          </span>
          <span
            className={`text-sm ${isSidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  item: NavLinks;
  isOpen: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const SidebarItem = (props: SidebarItemProps) => {
  const pathname = usePathname();
  const { item, isOpen, isExpanded, onToggle } = props;

  const hasSubs = item.subs && item.subs.length > 0;

  const isSingleActive = !hasSubs && pathname === item.to;
  const isParentActive =
    hasSubs && item.subs?.some((sub) => pathname === sub.to);

  const textClass = `whitespace-nowrap transition-all duration-300 ${
    isOpen ? "opacity-100 ml-3" : "opacity-0 w-0 overflow-hidden"
  }`;

  return (
    <li key={item.id} className="text-sm ">
      {hasSubs ? (
        // With Subs link
        <div className="mb-1">
          <button
            onClick={onToggle}
            className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors group relative
            ${
              isParentActive || isExpanded
                ? "border-b-2 border-sky-500 text-gray-600 bg-sky-500/10 dark:text-slate-200 dark:bg-gray-200/10"
                : "text-gray-600 hover:bg-sky-500/10 dark:text-gray-300 dark:hover:bg-gray-800"
            }
          `}
          >
            <div className="flex items-center min-w-0 capitalize">
              <span className="shrink-0">{item.icon}</span>
              <span className={textClass}>{item.title}</span>
            </div>
            {isOpen && (
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            )}
          </button>

          {/* Child List */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded && isOpen
                ? "max-h-40 opacity-100 mt-1"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-1 ">
              {item.subs?.map((sub) => {
                const isSubActive = pathname === sub.to;
                return (
                  <li key={sub.title}>
                    <Link
                      href={sub.to}
                      className={`w-full flex items-center p-2 text-sm rounded-md transition-colors capitalize ${
                        isSubActive
                          ? " text-slate-200 bg-sky-500 dark:bg-gray-200/10"
                          : "text-gray-500 hover:text-slate-200 hover:bg-sky-500 dark:text-slate-200"
                      }`}
                    >
                      <span className="shrink-0">{sub.iconSub}</span>
                      <span className={textClass}>{sub.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        // Single Link
        <Link
          href={item.to || "#"}
          className={`flex items-center p-2 rounded-md transition-colors mb-1 group capitalize
        ${
          isSingleActive
            ? "border-l-4 border-sky-500 text-gray-600 bg-sky-500/10 dark:text-slate-200 dark:bg-gray-200/10" // Style Active Keren
            : "hover:bg-sky-500/10 hover:dark:bg-gray-200/10"
        }
      `}
        >
          <span className="shrink-0">{item.icon}</span>
          <span className={textClass}>{item.title}</span>
        </Link>
      )}
    </li>
  );
};
