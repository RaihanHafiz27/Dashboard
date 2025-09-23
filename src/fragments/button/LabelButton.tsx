import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Links {
  id: number;
  title: string;
}

const features: Links[] = [
  {
    id: 1,
    title: "View Details",
  },
  {
    id: 2,
    title: "Export csv",
  },
  {
    id: 3,
    title: "Refresh Data",
  },
  {
    id: 4,
    title: "Pin Dashboard",
  },
];

export const LabelButton = ({ label }: { label: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex justify-between px-3 pt-3">
      <h3 className="font-semibold text-gray-600">{label}</h3>
      {/* <button className="cursor-not-allowed" disabled>
        <Ellipsis color="#4a5565" />
      </button> */}
      <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Ellipsis color="#4a5565" />
      </button>
      {isOpen && (
        <div className="bg-slate-200 space-y-2 rounded-sm absolute top-0 right-0 flex flex-col p-4 text-sm">
          {features.map((item) => (
            <Link key={item.id} href={""} onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
