import { stringToColor } from "@/lib/utils/stringToColor";

export const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`w-10 h-10 2xl:w-14 2xl:h-14 shrink-0 rounded-full ${stringToColor(
        name,
      )} flex items-center justify-center `}
    >
      <span className="text-xs font-medium text-gray-600 group-hover:text-sm transition-all duration-200">
        {initials}
      </span>
    </div>
  );
};
