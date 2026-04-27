import { SummaryLabel, SummaryType } from "@/pages/profile";
import {
  BookUser,
  Calendar,
  MapPin,
  UserRound,
  UsersRound,
} from "lucide-react";

const summary: SummaryLabel[] = [
  { id: 1, label: "join", type: "join", data: "12 January 2025" },
  { id: 2, label: "account status", type: "accountStatus", data: "Active" },
  { id: 3, label: "role", type: "role", data: "Admin" },
  { id: 4, label: "team", type: "team", data: "E-Commerce Admin" },
  { id: 5, label: "location", type: "location", data: "Jakarta, Indonesia" },
];

export const AboutSummarySection = () => {
  const summaryIcon: Record<SummaryType, React.ReactElement> = {
    join: <Calendar size={20} strokeWidth={1.5} />,
    accountStatus: <MapPin size={20} strokeWidth={1.5} />,
    role: <UsersRound size={20} strokeWidth={1.5} />,
    team: <UsersRound size={20} strokeWidth={1.5} />,
    location: <MapPin size={20} strokeWidth={1.5} />,
  };

  return (
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
          managing product listings, order processing, inventory updates, and
          customer inquiries to ensure smooth operations and support consistent
          sales growth.
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
                <span className="text-gray-600">{summaryIcon[item.type]}</span>
                <p className="text-xs capitalize text-gray-600">{item.label}</p>
              </div>
              <div>
                <p
                  className={`text-xs ${item.data === "Active" ? "text-green-600 bg-green-200 py-1 px-2 rounded-lg" : "text-gray-600"}`}
                >
                  {item ? item.data : "-"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
