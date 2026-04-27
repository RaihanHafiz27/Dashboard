import { ProfileViewProps } from "../ProfileView";

type PersonalProps = Pick<ProfileViewProps, "profileUser">;

export const PersonalSection = (props: PersonalProps) => {
  const { profileUser } = props;

  return (
    <div className="border border-gray-300 shadow-md rounded-lg space-y-2">
      <div className="font-bold text-gray-600 border-b border-gray-300 p-6 tracking-wide">
        Personal Information
      </div>
      <div className="grid grid-cols-2 gap-4 p-6 ">
        {profileUser.map((item: any) => (
          <div
            // key={item.id}/
            className="flex items-center space-x-2  text-gray-500 pb-4 border-b border-gray-300"
          >
            <span className="bg-violet-100 p-2 rounded-lg text-violet-600">
              {/* {iconMap[item.type]} */}
            </span>
            {/* <p className="text-sm">{item ? item.data : "-"}</p> */}
            <p className="text-sm">{"-"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
