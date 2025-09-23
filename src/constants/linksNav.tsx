import { NavLinks } from "@/types/navLinks.type";
import { Gauge, Settings, ShoppingCart, Star, User2 } from "lucide-react";

export const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "dashboard",
    subs: [
      { title: "overview", to: "/dashboard" },
      { title: "report", to: "/dashboard/report" },
    ],
    icon: <Gauge />,
  },
  {
    id: 2,
    title: "product",
    // to: "/dashboard/product",
    subs: [
      { title: "all product", to: "/dashboard/product" },
      { title: "cahert", to: "#" },
    ],
    icon: <ShoppingCart />,
  },
  {
    id: 3,
    title: "features",
    // to: "/",
    subs: [
      { title: "task", to: "#" },
      { title: "refunds", to: "#" },
    ],
    icon: <Star />,
  },
  {
    id: 4,
    title: "users",
    // to: "/",
    subs: [
      { title: "status", to: "#" },
      { title: "rchat", to: "#" },
    ],
    icon: <User2 />,
  },
  {
    id: 5,
    title: "settings",
    // to: "/",
    subs: [
      { title: "dark", to: "#" },
      { title: "rsa", to: "#" },
    ],
    icon: <Settings />,
  },
];
