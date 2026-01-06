import {
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
    icon: <Users className="w-5 h-5 2xl:w-7 2xl:h-7 text-sky-700" />,
    background: "bg-sky-700/30 dark:bg-sky-300",
  },
  {
    id: 2,
    title: "new users",
    count: 25,
    icon: <User className="w-5 h-5  2xl:w-7 2xl:h-7 text-red-700" />,
    background: "bg-red-700/30 dark:bg-red-300",
  },
  {
    id: 3,
    title: "top users",
    count: 77,
    icon: <Heart className="w-5 h-5  2xl:w-7 2xl:h-7 text-purple-700" />,
    background: "bg-purple-700/30 dark:bg-purple-300",
  },
  {
    id: 4,
    title: "other users",
    count: 1168,
    icon: (
      <CircleEllipsis className="w-5 h-5  2xl:w-7 2xl:h-7 text-green-700" />
    ),
    background: "bg-green-700/30 dark:bg-green-300",
  },
];

export const SummaryUsers = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-x-4 2xl:gap-x-8">
      {usersSum.map((item) => (
        <div
          key={item.id}
          className="bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md rounded-md p-4 hover:scale-105 transition-all duration-300 flex justify-between items-center"
        >
          <div className="flex  space-x-2 ">
            <div
              className={`${item.background} grid place-items-center p-3 2xl:p-4 rounded-full`}
            >
              <i>{item.icon}</i>
            </div>
            <div className="flex flex-col justify-center">
              <p className="capitalize font-semibold 2xl:text-xl text-gray-700 dark:text-gray-300">
                {item.title}
              </p>
              <CountUp
                className="text-sm 2xl:text-base text-gray-600 dark:text-gray-400"
                start={0}
                end={item.count}
                duration={5}
              />
            </div>
          </div>
          {/* Ellipsis Button */}
          <div className="grid place-items-center">
            <button>
              <EllipsisVertical className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
