export type Icons = "shield" | "thunder" | "person";

interface Quick {
  id: number;
  label: string;
  desc: string;
  icon: Icons;
}

export const quickInformation: Quick[] = [
  {
    id: 1,
    label: "secure & private",
    desc: "your data is protected with enterprise-grade security.",
    icon: "shield",
  },
  {
    id: 2,
    label: "fast & easy",
    desc: "quick access to your profile and setting in just a few clicks.",
    icon: "thunder",
  },
  {
    id: 3,
    label: "personalized",
    desc: "manage your profile information and preferences easily.",
    icon: "person",
  },
];

export const loginWith = [
  {
    id: 1,
    label: "google",
    icon: "/images/google.png",
  },
  {
    id: 2,
    label: "twitter",
    icon: "/images/twitter.png",
  },
  {
    id: 3,
    label: "microsoft",
    icon: "/images/microsoft.png",
  },
];
