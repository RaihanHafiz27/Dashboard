import Image from "next/image";
import { loginWith } from "./constant";

export const SocialAuth = () => {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      {loginWith.map((item) => (
        <button
          type="button"
          key={item.id}
          disabled
          className="border border-gray-300 p-2 flex items-center justify-center gap-x-2 rounded-lg hover:scale-105 transition-all duration-300 cursor-not-allowed"
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={100}
            height={100}
            className="md:w-4 2xl:w-5 h-auto"
          />
          <p className="text-sm capitalize text-gray-700">{item.label}</p>
        </button>
      ))}
    </div>
  );
};
