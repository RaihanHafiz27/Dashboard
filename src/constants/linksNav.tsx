import { NavLinks } from "@/types/navLinks.type";
import {
  CircleQuestionMark,
  Gauge,
  Settings,
  ShoppingCart,
  Star,
  User2,
} from "lucide-react";

export const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "dashboard",
    to: "/dashboard",
    // subs: [
    //   { title: "overview", to: "/dashboard" },
    //   { title: "report", to: "/dashboard/report" },
    // ],
    icon: <Gauge />,
  },
  {
    id: 2,
    title: "product",
    // to: "/dashboard/product",
    subs: [
      { title: "order", to: "/dashboard/product/orders" },
      { title: "stock", to: "/dashboard/product/stock" },
    ],
    icon: <ShoppingCart />,
  },
  {
    id: 3,
    title: "features",
    // to: "/",
    subs: [
      { title: "task", to: "/dashboard/features/task" },
      { title: "refunds", to: "#" },
    ],
    icon: <Star />,
  },
  {
    id: 4,
    title: "users",
    to: "/dashboard/users",
    icon: <User2 />,
  },
  {
    id: 5,
    title: "settings",
    // to: "/",
    subs: [
      { title: "profile", to: "#" },
      { title: "account", to: "#" },
      { title: "security", to: "#" },
    ],
    icon: <Settings />,
  },
  {
    id: 6,
    title: "help",
    to: "/dashboard/help",
    icon: <CircleQuestionMark />,
  },
];
