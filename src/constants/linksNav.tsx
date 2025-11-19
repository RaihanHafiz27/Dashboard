import { NavLinks } from "@/types/navLinks.type";
import {
  CircleQuestionMark,
  ClipboardList,
  DollarSign,
  Gauge,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

export const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "dashboard",
    to: "/dashboard",
    icon: <Gauge />,
    status: "active",
  },
  {
    id: 2,
    title: "product",
    subs: [
      { title: "order", to: "/product/orders" },
      { title: "stock", to: "/product/stocks" },
      { title: "refunds", to: "/product/refunds" },
    ],
    icon: <ShoppingCart />,
    status: "active",
  },
  {
    id: 3,
    title: "to-do",
    to: "/todo",
    icon: <ClipboardList />,
    status: "active",
  },
  {
    id: 4,
    title: "invoice",
    to: "/",
    icon: <DollarSign />,
    status: "inactive",
  },
  {
    id: 5,
    title: "users",
    to: "/users",
    icon: <Users />,
    status: "active",
  },
  {
    id: 6,
    title: "settings",
    // to: "/",
    subs: [
      { title: "profile", to: "#" },
      { title: "account", to: "#" },
      { title: "security", to: "#" },
    ],
    icon: <Settings />,
    status: "inactive",
  },
  {
    id: 7,
    title: "help",
    to: "/help",
    icon: <CircleQuestionMark />,
    status: "inactive",
  },
];
