import { textFields } from "@/features/Settings/components/section/ProfileSection";
import {
  Calendar,
  CalendarDays,
  Flag,
  Heart,
  House,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
  UsersRound,
  VenusAndMars,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import { FormDataTypes } from "../settings";
import { ProfileView } from "@/features/Profile/components/ProfileView";

import { useLocationLogic } from "@/features/Profile/hooks/useLocationLogic";

export type IconTypes =
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
  type: IconTypes;
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

export type SummaryType =
  | "join"
  | "accountStatus"
  | "role"
  | "team"
  | "location";

export interface SummaryLabel {
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
  const [isOpen, setIsOpen] = useState(false);
  const [formUser, setFormUser] = useState<FormDataTypes>({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    gender: "",
    phoneNumber: "",
    statusMarried: "",
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
    profileImage: null,
    postalCode: "",
    city: "",
    country: "",
  });

  console.log(isOpen);

  const profile = false;

  const iconMap: Record<IconTypes, React.ReactElement> = {
    user: <UserRound size={22} strokeWidth={1.5} />,
    mail: <Mail size={22} strokeWidth={1.5} />,
    password: <LockKeyhole size={22} strokeWidth={1.5} />,
    gender: <VenusAndMars size={22} strokeWidth={1.5} />,
    status: <Heart size={22} strokeWidth={1.5} />,
    phone: <Phone size={22} strokeWidth={1.5} />,
    placeOfBirth: <MapPin size={22} strokeWidth={1.5} />,
    birth: <CalendarDays size={22} strokeWidth={1.5} />,
    address: <House size={22} strokeWidth={1.5} />,
    location: <Flag size={22} strokeWidth={1.5} />,
  };

  const summaryIcon: Record<SummaryType, React.ReactElement> = {
    join: <Calendar size={20} strokeWidth={1.5} />,
    accountStatus: <MapPin size={20} strokeWidth={1.5} />,
    role: <UsersRound size={20} strokeWidth={1.5} />,
    team: <UsersRound size={20} strokeWidth={1.5} />,
    location: <MapPin size={20} strokeWidth={1.5} />,
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({
      ...prev,
      [name]: value,
      // Additional logic : If the country changes, clear the city
      ...(name === "country" ? { city: "" } : {}),
    }));
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormUser((prev) => {
      const updates: Partial<typeof prev> = { [name]: value };

      // Additional logic : If the country changes, clear the city
      if (name === "country") {
        updates.city = "";
      }

      return { ...prev, ...updates };
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormUser((prev) => ({
        ...prev,
        profileImage: file,
      }));
    }
  };

  const location = useLocationLogic(formUser);

  // console.log(location);
  console.log(formUser);

  const profileUser: any = [];

  return (
    <ProfileView
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      formUser={formUser}
      onChange={handleFieldChange}
      location={location}
      profileUser={profileUser}
    />
  );
};

export default ProfilePage;
