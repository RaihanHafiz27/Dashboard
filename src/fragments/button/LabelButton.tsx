import { ProductType } from "@/types/categoryProd.type";
import {
  ChevronDown,
  ChevronRight,
  Command,
  DownloadIcon,
  Ellipsis,
  Gauge,
  RotateCcwIcon,
  RotateCwIcon,
  ViewIcon,
} from "lucide-react";
import Link from "next/link";
import { AnchorHTMLAttributes, useEffect, useRef, useState } from "react";

interface Links {
  id: number;
  title: string;
  to: string;
  active: boolean;
  icon?: React.ReactNode;
}

const features: Links[] = [
  {
    id: 1,
    title: "Details",
    to: "/dashboard/product/orders",
    active: true,
    icon: <ViewIcon size={18} />,
  },
  {
    id: 2,
    title: "Csv",
    to: "#",
    active: false,
    icon: <DownloadIcon size={18} />,
  },
  {
    id: 3,
    title: "Refresh",
    to: "#",
    active: false,
    icon: <RotateCwIcon size={18} />,
  },
  {
    id: 4,
    title: "Dashboard",
    to: "#",
    active: false,
    icon: <Gauge size={18} />,
  },
];

type LabelControlProps = {
  title: string;
  type: "ellipsis" | "filter";

  // Props khusus untuk mode filter
  filterOptions?: string[];
  selectedFilter?: string;
  onFilterChange?: (value: string) => void;
};

export const LabelButton = ({
  title,
  type,
  filterOptions,
  selectedFilter,
  onFilterChange,
}: LabelControlProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!menuRef.current || menuRef.current.contains(event.target as Node)) {
        return null;
      }
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [menuRef]);

  useEffect(() => {
    console.log(menuRef);
  }, [menuRef]);

  return (
    <div ref={menuRef} className="relative flex justify-between px-3 pt-3">
      <h3 className="font-semibold text-gray-600">{title}</h3>
      <button
        className={`cursor-pointer ${
          type === "ellipsis"
            ? ""
            : "border-b border-gray-700 flex w-28 justify-between text-sm items-center "
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {type === "ellipsis" ? (
          <Ellipsis color="#4a5565" />
        ) : (
          <>
            <span className="capitalize">{selectedFilter}</span>
            <ChevronRight
              size={20}
              className={`${
                isMenuOpen ? "transition-all duration-300 rotate-90" : ""
              }`}
            />
          </>
        )}
      </button>

      <div
        // ref={menuRef}
        className={`z-10 absolute bg-gray-200/90 top-12 right-2 p-2 rounded-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        {type === "ellipsis" ? (
          <ul className="space-y-1">
            {features.map((item) => (
              <li key={item.id}>
                <Link
                  href={item?.active ? item?.to : "#"}
                  onClick={(e) => {
                    if (!item.active) {
                      e.preventDefault();
                    } else {
                      () => setIsMenuOpen(!isMenuOpen);
                    }
                  }}
                  aria-disabled={!item.active}
                  // onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={` flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700 ${
                    item.id > 1 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <i>{item.icon}</i>
                    <span>{item.title}</span>
                  </div>
                  <div className="flex items-center">
                    <Command size={18} />
                    <span>{item.title.substring(0, 1)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onFilterChange?.("all")}
                className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
              >
                <span>All</span>
                <div className="flex items-center">
                  <Command />
                  <span>A</span>
                </div>
              </button>
            </li>
            {filterOptions?.map((label) => (
              <li key={label} className="">
                <button
                  onClick={() => onFilterChange?.(label)}
                  className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
                >
                  <span>{label}</span>
                  <div className="flex items-center">
                    <Command size={20} />
                    <span>{label.substring(0, 1)}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

{
  /* {isMenuOpen && type === "ellipsis" && (
        <div
          ref={menuRef}
          className={`z-10 absolute bg-gray-200/80 top-8 right-2 p-2 rounded-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <ul className="space-y-1">
            {features.map((item) => (
              <li key={item.id}>
                <button
                  disabled={item.id > 1}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={` flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700 ${
                    item.id > 1 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <i>{item.icon}</i>
                    <span>{item.title}</span>
                  </div>
                  <div className="flex items-center">
                    <Command size={18} />
                    <span>{item.title.substring(0, 1)}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )} */
}
{
  /* {isMenuOpen && type === "filter" && (
        <div
          ref={menuRef}
          className="absolute bg-gray-200/80 top-12 right-2 p-2 rounded-md"
        >
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onFilterChange?.("all")}
                className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
              >
                <span>All</span>
                <div className="flex items-center">
                  <Command />
                  <span>A</span>
                </div>
              </button>
            </li>
            {filterOptions?.map((label) => (
              <li key={label} className="">
                <button
                  onClick={() => onFilterChange?.(label)}
                  className="cursor-pointer flex text-sm justify-between items-center w-40 hover:bg-gray-400/70  p-2 rounded-md text-gray-700"
                >
                  <span>{label}</span>
                  <div className="flex items-center">
                    <Command size={20} />
                    <span>{label.substring(0, 1)}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )} */
}

// <select
//   name=""
//   id="product-filter"
//   value={selectedFilter}
//   onChange={(e) => onFilterChange?.(e.target.value)}
//   className="border-b border-gray-700 text-sm outline-0"
// >
//   <option value="all">All</option>
//   {filterOptions?.map((label) => (
//     <option key={label} value={label}>
//       {label}
//     </option>
//   ))}
// </select>
