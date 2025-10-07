import { Count } from "@/types/count.type";
import { DollarSign, Handbag, Package, Users } from "lucide-react";

export const datas: Count[] = [
  {
    id: 1,
    title: "new order",
    sum: 127,
    growth: +12,
    icon: <Handbag className="w-6 h-6 2xl:w-12 2xl:h-12 text-blue-600" />,
  },
  {
    id: 2,
    title: "stock products",
    sum: 390,
    growth: -3,
    icon: <Package className="w-6 h-6 2xl:w-12 2xl:h-12 text-purple-600" />,
  },
  {
    id: 3,
    title: "users",
    sum: 1270,
    growth: +8,
    icon: <Users className="w-6 h-6 2xl:w-12 2xl:h-12 text-yellow-600" />,
  },
  {
    id: 4,
    title: "sales",
    sum: 528000,
    growth: 5,
    icon: <DollarSign className="w-6 h-6 2xl:w-12 2xl:h-12 text-green-600" />,
  },
];
