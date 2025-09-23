import { stringToColor } from "@/lib/utils/stringToColor";

export const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`w-8 h-8 rounded-full ${stringToColor(
        name
      )} flex items-center justify-center text-xs font-medium text-gray-600`}
    >
      {initials}
    </div>
  );
};
