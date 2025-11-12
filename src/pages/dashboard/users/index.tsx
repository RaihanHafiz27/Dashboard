import { SummaryUsers } from "@/fragments/cards/SummaryUsers";
import { SearchBar } from "@/fragments/input/SearchBar";
import { Dot, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

const users = [
  {
    id: 1,
    name: "Alicia Tan",
    email: "aliciatan@example.com",
    phone: "+62 812 3456 7890",
    location: "Indonesia",
    status: "online",
    image: "/images/woman-2.png",
  },
  {
    id: 2,
    name: "Daniel Kim",
    email: "danielkim@example.com",
    phone: "+82 10 2233 4455",
    location: "South Korea",
    status: "offline",
    image: "/images/man-4.png",
  },
  {
    id: 3,
    name: "Sophia Müller",
    email: "sophiamueller@example.com",
    phone: "+49 171 2233445",
    location: "Germany",
    status: "online",
    image: "/images/woman-5.png",
  },
  {
    id: 4,
    name: "Ethan Smith",
    email: "ethansmith@example.com",
    phone: "+1 408 555 1234",
    location: "United States",
    status: "offline",
    image: "/images/man-1.png",
  },
  {
    id: 5,
    name: "Léa Dupont",
    email: "leadupont@example.com",
    phone: "+33 6 12 34 56 78",
    location: "France",
    status: "online",
    image: "/images/woman-6.png",
  },
  {
    id: 6,
    name: "Ravi Patel",
    email: "ravipatel@example.com",
    phone: "+91 98765 43210",
    location: "India",
    status: "online",
    image: "/images/man-2.png",
  },
  {
    id: 7,
    name: "Mia Johnson",
    email: "miajohnson@example.com",
    phone: "+44 7700 900123",
    location: "United Kingdom",
    status: "offline",
    image: "/images/woman-4.png",
  },
];

const UsersPage = () => {
  return (
    <div className="space-y-4">
      <SummaryUsers />

      <div
        className={`w-full space-y-4  p-4 rounded-sm bg-slate-50 dark:bg-slate-800`}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700">All Users</p>
          <div className="flex items-center space-x-4">
            <SearchBar isFull={true} />
            <button className="bg-sky-700 px-4 py-2 text-sm rounded-sm text-slate-200">
              Add user
            </button>
          </div>
        </div>
        {/* Table Users */}
        <div className="flex flex-col h-[600px] space-y-2  overflow-hidden">
          <table className="min-w-full overflow-hidden table-auto border-separate border-spacing-y-1">
            <thead className="border-b border-gray-300">
              <tr className="text-gray-700 tracking-wide text-sm">
                <th className="p-3 text-start">Name</th>
                <th className="p-3 ">Phone</th>
                <th className="p-3 ">Location</th>
                <th className="p-3 ">Status</th>
                <th className="p-3 ">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 ">
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={100}
                          height={100}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <p>{user.name}</p>
                        <p className="text-sm">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-2 lowercase text-gray-700 text-sm">
                    {user.phone}
                  </td>
                  <td className="p-2 text-gray-700 text-sm">{user.location}</td>
                  <td className="p-2 text-gray-700">
                    <span
                      className={`flex items-center justify-center py-1 rounded-sm border ${
                        user.status === "online"
                          ? "border-green-500 bg-green-100 text-green-700"
                          : "border-gray-400 bg-gray-100 text-gray-600"
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        <Dot className="w-3 h-3" />
                      </span>
                      <span className="text-sm font-medium">{user.status}</span>
                    </span>
                  </td>
                  <td className="p-2">
                    <div className="border border-gray-400 grid grid-cols-2 divide-x divide-gray-400 py-1.5 rounded-md">
                      <button
                        className="flex justify-center cursor-pointer"
                        // onClick={() => {
                        //   setIsOpenModal(true);
                        //   foundItem(users.id);
                        // }}
                      >
                        <SquarePen color="#6a7282" size={20} />
                      </button>
                      <button className="flex justify-center cursor-pointer">
                        <Trash2 color="#e7000b" size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
