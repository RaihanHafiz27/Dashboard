import {
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  Phone,
  UserRound,
} from "lucide-react";
import { ProfileViewProps } from "../ProfileView";
import Image from "next/image";

type HeaderProps = Pick<
  ProfileViewProps,
  "isOpen" | "setIsOpen" | "profileUser"
>;

const Display = [
  {
    id: 1,
    key: "email",
    type: "mail",
  },
  {
    id: 2,
    key: "phone",
    type: "phone",
  },
  {
    id: 3,
    key: "location",
    type: "location",
  },
];

export const HeaderSection = (props: HeaderProps) => {
  const { isOpen, setIsOpen, profileUser } = props;

  const iconMap: Record<string, React.ReactElement> = {
    mail: <Mail size={20} strokeWidth={1.5} />,
    phone: <Phone size={20} strokeWidth={1.5} />,
    location: <MapPin size={20} strokeWidth={1.5} />,
  };

  console.log(profileUser);

  return (
    <div className="relative w-full h-52 flex items-center gap-x-10 p-8 bg-gradient-to-r from-blue-100 to-violet-200 rounded-xl shadow-md  overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-3 bg-violet-600 hover:bg-violet-600/20 transition-colors cursor-pointer p-2 rounded-lg text-white hover:text-violet-600"
      >
        <Pencil size={18} strokeWidth={1.5} />
      </button>
      {/* Decoration Layer */}
      <DecorationLayer />
      <div className="relative border-4 border-slate-100 bg-gray-300 w-32 h-32 rounded-full overflow-hidden grid place-items-center select-none">
        {profileUser ? (
          <Image
            src={""}
            alt="profile picture"
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <UserRound
            size={100}
            strokeWidth={1}
            fill="#6a7282"
            className="absolute -bottom-3.5 text-gray-300"
          />
        )}
      </div>
      <div className="space-y-2 z-10">
        <h2 className="text-gray-600 text-xl font-bold tracking-wide">
          {profileUser ? "Kanna Anissa Syifa" : "-"}
        </h2>
        <div className="text-[10px] font-bold bg-violet-200 text-violet-600 inline-block p-2 rounded-lg tracking-wider">
          {profileUser ? "E-Commerce Admin" : "-"}
        </div>
        <div className="flex space-x-4">
          {Display.map((item) => {
            const value = profileUser[item.key];

            return (
              <div
                key={item.id}
                className="flex items-center space-x-2 bg-white/40 py-2 px-4 rounded-lg text-gray-500"
              >
                <span>{iconMap[item.type]}</span>
                {/* <p className="text-sm">{item ? item.data : "-"}</p> */}
                <p className="text-xs 2xl:text-sm ">
                  {/* Logic placeholder "-" cukup di sini sekali saja */}
                  {value ?? "-"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const DecorationLayer = () => {
  return (
    <div className="absolute right-0 bottom-0 h-full w-[80%] pointer-events-none opacity-50 ">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
        preserveAspectRatio="none"
        className="w-full h-full [mask-image:linear-gradient(to_left,black_10%,transparent_100%)]"
      >
        <defs>
          <linearGradient id="gradient" x1="1%" y1="40%" x2="99%" y2="60%">
            <stop offset="5%" stopColor="#8ed1fc"></stop>
            <stop offset="95%" stopColor="#a684ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 L 0,300 C 76.86124401913875,294.00956937799043 153.7224880382775,288.01913875598086 254,274 C 354.2775119617225,259.98086124401914 477.97129186602865,237.93301435406698 590,197 C 702.0287081339713,156.06698564593302 802.3923444976077,96.2488038277512 890,75 C 977.6076555023923,53.751196172248804 1052.4593301435407,71.07177033492823 1142,65 C 1231.5406698564593,58.92822966507176 1335.7703349282297,29.46411483253588 1440,0 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="1%" y1="40%" x2="99%" y2="60%">
            <stop offset="5%" stopColor="#8ed1fc"></stop>
            <stop offset="95%" stopColor="#a684ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 L 0,500 C 79.77033492822966,494.42105263157896 159.54066985645932,488.8421052631579 272,501 C 384.4593301435407,513.1578947368421 529.6076555023924,543.0526315789473 628,495 C 726.3923444976076,446.9473684210527 778.0287081339713,320.9473684210527 858,275 C 937.9712918660287,229.0526315789473 1046.2775119617224,263.15789473684214 1148,264 C 1249.7224880382776,264.84210526315786 1344.8612440191387,232.42105263157893 1440,200 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
};
