import { LucideIcon, ShieldCheck, UserRound, Zap } from "lucide-react";
import { Icons, quickInformation } from "./constant";

export const QuickInfo = () => {
  return (
    <div className="grid grid-cols-3 gap-6 z-10">
      {quickInformation.map((item) => (
        <div key={item.id} className="flex gap-x-3">
          <div className="">
            <div className="bg-white/50 backdrop-blur-sm p-2 rounded-xl w-fit h-fit shadow-sm">
              <DynamicIcon name={item.icon} />
            </div>
          </div>
          <div>
            <p className="font-bold md:text-xs 2xl:text-sm tracking-wide capitalize text-violet-600 mb-1">
              {item.label}
            </p>
            <p className="md:text-[10px] 2xl:text-xs font-medium tracking-wide capitalize text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ICON_MAP: Record<Icons, LucideIcon> = {
  shield: ShieldCheck,
  thunder: Zap,
  person: UserRound,
};

const DynamicIcon = ({
  name,
  classname,
}: {
  name: Icons;
  classname?: string;
}) => {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={`w-6 h-6 2xl:w-8 2xl:h-8 text-violet-600 ${classname}`}
      strokeWidth={1.5}
    />
  );
};
