import { datas } from "@/data/summaryData";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleEllipsis,
  EllipsisVertical,
  Heart,
  User,
  Users,
} from "lucide-react";
import CountUp from "react-countup";

const usersSum = [
  {
    id: 1,
    title: "total users",
    count: 1270,
    icon: <Users className="w-5 h-5 text-sky-700" />,
    background: "bg-sky-700/30",
  },
  {
    id: 2,
    title: "new users",
    count: 25,
    icon: <User className="w-5 h-5 text-red-700" />,
    background: "bg-red-700/30",
  },
  {
    id: 3,
    title: "top users",
    count: 77,
    icon: <Heart className="w-5 h-5 text-purple-700" />,
    background: "bg-purple-700/30",
  },
  {
    id: 4,
    title: "other users",
    count: 1168,
    icon: <CircleEllipsis className="w-5 h-5 text-green-700" />,
    background: "bg-green-700/30",
  },
];

export const SummaryUsers = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-x-4 2xl:gap-x-8">
      {usersSum.map((item) => (
        <div
          key={item.id}
          className="bg-slate-50 rounded-md p-4 shadow-sm  hover:scale-105 transition-all duration-300 flex justify-between items-center"
        >
          <div className="flex  space-x-2 ">
            <div
              className={`${item.background} grid place-items-center p-3 rounded-full`}
            >
              <i>{item.icon}</i>
            </div>
            <div className="flex flex-col justify-center">
              <p className="capitalize font-semibold text-gray-700">
                {item.title}
              </p>
              <CountUp
                className="text-sm text-gray-600"
                start={0}
                end={item.count}
                duration={5}
              />
            </div>
          </div>
          {/* Ellipsis Button */}
          <div className="grid place-items-center">
            <button>
              <EllipsisVertical />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
