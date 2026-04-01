import { NavLinks } from "@/types/navLinks.type";
import {
  ChartNoAxesColumn,
  Circle,
  CircleQuestionMark,
  ClipboardList,
  DollarSign,
  Mail,
  Package,
  Settings,
  Users,
} from "lucide-react";

export const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "dashboard",
    to: "/dashboard",
    icon: <ChartNoAxesColumn />,
    status: "active",
  },
  {
    id: 2,
    title: "product",
    subs: [
      { title: "order", to: "/product/orders", iconSub: <Circle size={18} /> },
      { title: "stock", to: "/product/stocks", iconSub: <Circle size={18} /> },
      {
        title: "refunds",
        to: "/product/refunds",
        iconSub: <Circle size={18} />,
      },
    ],
    icon: <Package />,
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
    title: "cash flow",
    to: "/cash-flow",
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
    title: "inbox",
    to: "/",
    icon: <Mail />,
    status: "active",
  },
  {
    id: 7,
    title: "settings",
    to: "/settings",
    icon: <Settings />,
    status: "inactive",
  },
  {
    id: 8,
    title: "help",
    to: "/help",
    icon: <CircleQuestionMark />,
    status: "active",
  },
];
