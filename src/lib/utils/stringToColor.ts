export const colorsProfile = [
  "bg-red-200 text-red-700",
  "bg-blue-200 text-blue-700",
  "bg-green-200 text-green-700",
  "bg-yellow-200 text-yellow-700",
  "bg-purple-200 text-purple-700",
  "bg-pink-200 text-pink-700",
  "bg-indigo-200 text-indigo-700",
  "bg-teal-200 text-teal-700",
];

export function stringToColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorsProfile[Math.abs(hash) % colorsProfile.length];
}
