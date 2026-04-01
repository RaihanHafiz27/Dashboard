import { useState } from "react";

export const ToggleSwitch = ({
  label,
  condition = false,
}: {
  label: string;
  condition?: boolean;
}) => {
  const [isOn, setIsOn] = useState(condition);
  return (
    <label className="inline-flex items-center cursor-pointer gap-3 select-none w-fit">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
        <div className="bg-gray-300 dark:bg-gray-600 w-11 h-6 rounded-full peer peer-checked:bg-blue-500"></div>
        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
      </div>
      {label && (
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </span>
      )}
    </label>
  );
};
