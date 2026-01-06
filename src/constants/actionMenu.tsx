import { DownloadIcon, Gauge, RotateCwIcon, ViewIcon } from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Details",
    to: "/product/orders",
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
