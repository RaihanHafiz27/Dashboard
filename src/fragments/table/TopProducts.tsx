import Image from "next/image";
import { LabelButton } from "../button/LabelButton";
import { top3 } from "@/data/top3";

export const TopProducts = () => {
  return (
    <div className="rounded-sm bg-slate-50">
      <LabelButton label="Top Products" />
      <div className="grid grid-cols-1 gap-y-4 p-4 space-y-1">
        {top3.map((prod) => (
          <div
            key={prod.id}
            className="flex items-center space-x-4  hover:scale-105 transition-all duration-300"
          >
            <div className="relative bg-sky-800/50 rounded-sm">
              <Image
                src={prod.img}
                width={100}
                height={100}
                alt={prod.title}
                className="object-cover w-20 h-auto"
              />
              <span className="bg-gray-800 text-xs py-1 rounded-sm px-2 left-0 text-slate-200 absolute top-0">
                {prod.id}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="line-clamp-1">{prod.title}</p>
              <div className="flex ">⭐⭐⭐⭐⭐</div>
              <p>Sold : {prod.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
