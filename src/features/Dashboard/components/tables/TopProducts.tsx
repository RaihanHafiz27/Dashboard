import Image from "next/image";
import { top3 } from "@/data/top3";
import { ActionMenu } from "@/components/common/Dropdown/ActionMenu";
import { features } from "@/constants/actionMenu";

export const TopProducts = () => {
  return (
    <div className="rounded-sm bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-gray-500 shadow-md">
      <ActionMenu items={features} label="Top Products" />
      <ol className="flex flex-col gap-y-5 p-4  h-80 2xl:h-96 overflow-y-auto">
        {top3.map((prod) => (
          <li
            key={prod.id}
            className="flex items-center space-x-4  hover:scale-105 transition-all duration-300"
          >
            <div className="relative bg-sky-800/50 dark:bg-sky-700 rounded-sm">
              <Image
                src={prod.img}
                width={100}
                height={100}
                alt={prod.title}
                className="object-cover w-20 2xl:w-24 h-auto"
              />
              <span className="bg-gray-800  text-xs 2xl:text-base py-1 rounded-sm px-2 left-0 text-slate-200  absolute top-0">
                {prod.id}
              </span>
            </div>
            <div className="space-y-2 text-sm 2xl:text-base">
              <h3 className="line-clamp-1 text-gray-700 dark:text-gray-300">
                {prod.title}
              </h3>
              <div className="flex " aria-label="5 out of 5 stars">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Sold : {prod.price}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
