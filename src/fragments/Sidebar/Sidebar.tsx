import {
  ChevronRight,
  Gauge,
  LucideIcon,
  PanelTopOpen,
  Search,
  Settings,
  ShoppingCart,
  Star,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import {LucideIcon} from "lucide-react"

interface NavLinks {
  id: number;
  title: string;
  subs?: { title: string; to: string }[];
  icon: React.ReactNode;
}

const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "dashboard",
    subs: [
      { title: "overview", to: "/dashboard" },
      { title: "report", to: "/dashboard/report" },
      { title: "task", to: "#" },
    ],
    icon: <Gauge />,
  },
  {
    id: 2,
    title: "product",
    // to: "/dashboard/product",
    subs: [
      { title: "all product", to: "/dashboard" },
      { title: "cahert", to: "/dashboard/report" },
    ],
    icon: <ShoppingCart />,
  },
  {
    id: 3,
    title: "features",
    // to: "/",
    subs: [
      { title: "a121", to: "/dashboard" },
      { title: "re1rt", to: "/dashboard/report" },
    ],
    icon: <Star />,
  },
  {
    id: 4,
    title: "users",
    // to: "/",
    subs: [
      { title: "status", to: "/dashboard" },
      { title: "rchat", to: "/dashboard/report" },
    ],
    icon: <User2 />,
  },
  {
    id: 5,
    title: "settings",
    // to: "/",
    subs: [
      { title: "dark", to: "/dashboard" },
      { title: "rsa", to: "/dashboard/report" },
    ],
    icon: <Settings />,
  },
];

export const Sidebar = ({
  isFull,
  setIsFull,
}: {
  isFull: boolean;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showMenu, setShowMenu] = useState<string | null>(null);
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
        <ul className="grid grid-cols-1 gap-y-2 ">
          {navLinks.map((link) => (
            <li key={link.id} className="p-2 w-full ">
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
                className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  showMenu === link.title
                    ? "max-h-40 opacity-100"
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
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="space-y-4">
        <h2>Profile</h2>
        <div className="flex items-center space-x-2">
          <Image
            src={"/images/profile.jpg"}
            width={200}
            height={200}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xs">
            <p>KannaSYF</p>
            <p>Account Settings</p>
          </span>
        </div>
      </div> */}
    </aside>
  );
};

//  <nav className="grid grid-cols-1 gap-y-4">
//         {navLinks.map((link) => (
//           <Link
//             key={link.id}
//             href={link.to}
//             className={`flex items-center justify-between px-2 py-3 capitalize rounded-sm ${
//               router.pathname === link.to
//                 ? "border-l-4 border-sky-500 bg-gray-200/10"
//                 : ""
//             }`}
//           >
//             <span className="flex items-center space-x-2">
//               <i>{link.icon}</i>
//               <span className={`${isFull ? "block" : "hidden"}`}>
//                 {link.title}
//               </span>
//             </span>
//             <i>
//               <ChevronRight />
//             </i>
//           </Link>
//         ))}
//       </nav>
