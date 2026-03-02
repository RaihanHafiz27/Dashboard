import { ButtonEdit } from "@/components/ui/Button/ButtonEdit";
import { ButtonRemove } from "@/components/ui/Button/ButtonRemove";
import { Users } from "@/lib/utils/dummyUsers";
import { Dot } from "lucide-react";
import Image from "next/image";
import { Avatar } from "../profile/Avatar";

// interface UsersTableProps {
//   data: Users[];
// }

export const UsersTable = ({ data }: { data: Users[] }) => {
  return (
    <div className="flex flex-col h-[500px] 2xl:h-[600px] space-y-2 overflow-hidden ">
      <table className="w-full table-fixed border-collapse">
        <thead className="border-b border-gray-300 dark:border-gray-500">
          <tr className="text-gray-700 dark:text-gray-300 tracking-wide text-xs lg:text-sm font-bold">
            <th className="py-3 px-4 w-[30%] text-start">Profile</th>
            <th className="py-3 px-4 w-[20%] text-start">Phone Number</th>
            <th className="py-3 px-4 w-[20%] text-start">Location</th>
            <th className="py-3 px-4 w-[15%] text-center">Status</th>
            <th className="py-3 px-4 w-[15%] text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className="group hover:scale-103 transition-all duration-200 hover:bg-slate-500/5 dark:hover:bg-gray-800/30"
            >
              <td className="py-3 px-4 w-[30%]" title={user.email}>
                <div className="flex items-center space-x-4">
                  {user.image ? (
                    <div className="w-10 h-10 2xl:w-14 2xl:h-14 flex-shrink-0">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={100}
                        height={100}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <Avatar name={user.name} />
                  )}
                  <div className="min-w-0">
                    <p className="capitalize font-medium text-xs lg:text-sm 2xl:text-lg text-gray-800 dark:text-gray-200 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              </td>

              <td
                className="py-3 px-4 w-[20%] text-xs lg:text-sm text-gray-700 dark:text-gray-300 truncate"
                title={user.telp}
              >
                {user.telp}
              </td>

              <td className="py-3 px-4 w-[20%] text-xs lg:text-sm capitalize text-gray-700 dark:text-gray-300 truncate">
                {user.location}
              </td>

              <td className="py-3 px-4 w-[15%]">
                <div className="flex justify-center">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border ${
                      user.status === true
                        ? " bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                        : " bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                    }`}
                  >
                    <Dot className={`w-4 h-4 mr-1`} />
                    {user.status ? "Online" : "Offline"}
                  </span>
                </div>
              </td>

              <td className="py-3 px-4 w-[15%] ">
                <div className="flex justify-center space-x-2">
                  <ButtonEdit />
                  <ButtonRemove />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
