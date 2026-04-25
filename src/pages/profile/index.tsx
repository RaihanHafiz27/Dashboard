import {
  BookUser,
  Calendar,
  CalendarDays,
  Camera,
  CircleUserRound,
  Flag,
  Heart,
  House,
  Locate,
  LockKeyhole,
  LucideIcon,
  Mail,
  MapPin,
  Pencil,
  Phone,
  UserRound,
  UsersRound,
  VenusAndMars,
} from "lucide-react";
import Image from "next/image";

type IconType =
  | "user"
  | "mail"
  | "password"
  | "phone"
  | "gender"
  | "status"
  | "placeOfBirth"
  | "birth"
  | "address"
  | "location";

interface Dummy {
  id: number;
  data?: string;
  type: IconType;
}

const dummy: Dummy[] = [
  {
    id: 1,
    data: "kannaanissa@gmail.com",
    type: "mail",
  },
  {
    id: 2,
    data: "+123456789",
    type: "phone",
  },
  {
    id: 3,
    data: "Jakarta, Indonesia",
    type: "location",
  },
];

const personalInformation: Dummy[] = [
  {
    id: 1,
    type: "user",
  },
  {
    id: 2,
    type: "mail",
  },
  {
    id: 3,
    type: "password",
  },
  {
    id: 4,
    type: "gender",
  },
  {
    id: 5,
    type: "phone",
  },
  {
    id: 10,
    type: "status",
  },
  {
    id: 9,
    type: "placeOfBirth",
  },
  {
    id: 6,
    type: "birth",
  },
  {
    id: 7,
    type: "address",
  },
  {
    id: 8,
    type: "location",
  },
];

type SummaryType = "join" | "accountStatus" | "role" | "team" | "location";

interface SummaryLabel {
  id: number;
  label: string;
  type: SummaryType;
  data: string;
}

const summary: SummaryLabel[] = [
  { id: 1, label: "join", type: "join", data: "12 January 2025" },
  { id: 2, label: "account status", type: "accountStatus", data: "Active" },
  { id: 3, label: "role", type: "role", data: "Admin" },
  { id: 4, label: "team", type: "team", data: "E-Commerce Admin" },
  { id: 5, label: "location", type: "location", data: "Jakarta, Indonesia" },
];

const ProfilePage = () => {
  const profile = false;

  const iconMap: Record<IconType, React.ReactElement> = {
    user: <UserRound size={22} />,
    mail: <Mail size={22} />,
    password: <LockKeyhole size={22} />,
    gender: <VenusAndMars size={22} />,
    status: <Heart size={22} />,
    phone: <Phone size={22} />,
    placeOfBirth: <MapPin size={22} />,
    birth: <CalendarDays size={22} />,
    address: <House size={22} />,
    location: <Flag size={22} />,
  };

  const summaryIcon: Record<SummaryType, React.ReactElement> = {
    join: <Calendar size={20} />,
    accountStatus: <MapPin size={20} />,
    role: <UsersRound size={20} />,
    team: <UsersRound size={20} />,
    location: <MapPin size={20} />,
  };

  return (
    <div className="space-y-6">
      <div className="relative w-full h-52 flex items-center gap-x-10 p-8 bg-gradient-to-r from-blue-100 to-violet-200 rounded-xl shadow-md  overflow-hidden">
        <button className="absolute top-4 right-3 bg-violet-600 hover:bg-violet-600/20 transition-colors cursor-pointer p-2 rounded-lg text-white hover:text-violet-600">
          <Pencil size={18} />
        </button>
        {/* Decoration Layer */}
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
        <div className="relative w-28 z-10">
          <div className="relative border-4 border-slate-100 bg-gray-300 w-32 h-32 rounded-full overflow-hidden grid place-items-center select-none">
            {profile ? (
              <Image
                src={profile}
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
          <button
            onClick={() => {}}
            className="absolute bottom-0 -right-2 bg-slate-100 rounded-full p-2 cursor-pointer"
          >
            <Camera
              size={20}
              strokeWidth={1.5}
              fill="#7f22fe"
              className="text-slate-200"
            />
          </button>
        </div>
        <div className="space-y-2 z-10">
          <h2 className="text-gray-600 text-xl font-bold tracking-wide">
            Kanna Anissa Syifa
          </h2>
          <div className="text-[10px] font-bold bg-violet-200 text-violet-600 inline-block p-2 rounded-lg tracking-wider">
            E-Commerce Admin
          </div>
          <div className="flex space-x-4">
            {dummy.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-2 bg-white/40 py-2 px-4 rounded-lg text-gray-500"
              >
                <span>{iconMap[item.type]}</span>
                {/* <p className="text-sm">{item ? item.data : "-"}</p> */}
                <p className="text-xs 2xl:text-sm ">{item.data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[6fr_4fr] gap-6">
        <div className="border border-gray-300 shadow-md rounded-lg space-y-2">
          <div className="font-bold text-gray-600 border-b border-gray-300 p-6 tracking-wide">
            Personal Information
          </div>
          <div className="grid grid-cols-2 gap-4 p-6 ">
            {personalInformation.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-2  text-gray-500 pb-4 border-b border-gray-300"
              >
                <span className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  {iconMap[item.type]}
                </span>
                {/* <p className="text-sm">{item ? item.data : "-"}</p> */}
                <p className="text-sm">{"-"}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className=" border border-gray-300 shadow-md rounded-lg space-y-2 p-6">
            <div className="w-full flex items-center gap-x-4">
              <span className="bg-violet-100 p-2 rounded-lg text-violet-600">
                <UserRound size={22} />
              </span>
              <p className="font-bold text-gray-600 tracking-wide">About Me</p>
            </div>
            <p className="text-xs text-justify">
              E-commerce Admin with strong attention to detail, experienced in
              managing product listings, order processing, inventory updates,
              and customer inquiries to ensure smooth operations and support
              consistent sales growth.
            </p>
          </div>
          <div className="border border-gray-300 shadow-md rounded-lg space-y-4 p-6">
            <div className="w-full flex items-center gap-x-4 border-b border-gray-300 pb-2">
              <span className="bg-violet-100 p-2 rounded-lg text-violet-600">
                <BookUser size={22} />
              </span>
              <p className="font-bold text-gray-600 tracking-wide">Summary</p>
            </div>
            <div className="grid grid-cols-1 gap-y-3">
              {summary.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between space-y-1"
                >
                  <div className="flex items-center gap-x-4">
                    <span className="text-gray-600">
                      {summaryIcon[item.type]}
                    </span>
                    <p className="text-xs capitalize text-gray-600">
                      {item.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">
                      {item ? item.data : "-"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
