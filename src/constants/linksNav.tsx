import { NavLinks } from "@/types/navLinks.type";
import { Gauge, Settings, ShoppingCart, Star, User2 } from "lucide-react";

export const navLinks: NavLinks[] = [
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
