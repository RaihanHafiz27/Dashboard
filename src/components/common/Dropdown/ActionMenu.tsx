import { useState } from "react";
import Link from "next/link";
import { Ellipsis, Command } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";

// Tipe data untuk item menu navigasi
interface MenuItem {
  title: string;
  to: string;
  icon: React.ReactNode;
  active: boolean;
}

export const ActionMenu = ({
  items,
  label,
}: {
  items: MenuItem[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className="flex justify-between items-center px-4 pt-3">
      {/* title*/}
      <h3 className="font-semibold text-gray-600 dark:text-gray-300">
        {label}
      </h3>
      <div ref={menuRef} className="relative">
        {/* TOMBOL TITIK TIGA */}
        <button
          className="cursor-pointer p-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Ellipsis className="text-gray-500 dark:text-gray-300" />
        </button>

        {/* MENU POPUP */}
        <div
          className={`z-10 absolute bg-slate-200 top-full mt-2 right-0 p-2 rounded-md transition-all duration-300 ease-in-out w-40 shadow-lg ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-2 opacity-0 invisible"
          }`}
        >
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.active ? item.to : "#"}
                  onClick={(e) => {
                    if (!item.active) e.preventDefault();
                    else setIsOpen(false);
                  }}
                  className={`flex text-sm justify-between items-center w-full hover:bg-gray-400/70 p-2 rounded-md text-gray-700 ${
                    item.active
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <Command size={14} className="mr-1" />
                    {item.title.charAt(0)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
