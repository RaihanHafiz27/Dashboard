import { ReactNode } from "react";

interface HeaderProps {
  label: string;
  children: ReactNode;
}

export const HeaderChart = ({ label, children }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* TITLE */}
      <h3 className="font-semibold text-gray-600 dark:text-gray-300">
        {label}
      </h3>

      {/* DROPDOWN */}
      <div className="w-44 flex items-center justify-end">{children}</div>
    </div>
  );
};
