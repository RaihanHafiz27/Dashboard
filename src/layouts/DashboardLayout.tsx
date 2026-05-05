import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { ReactElement, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useTheme } from "@/context/ThemeContext";
import { InformationBar } from "@/components/layout/InformationBar/InformationBar";
import { ModalPremium } from "@/components/common/Modal/ModalPrem";
import { MobileGuard } from "@/components/ui/MobileGuard/MobileGuard";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const DashboardLayout = ({ children }: { children: ReactElement }) => {
  const [isLocked, setIsLocked] = useState<boolean>(true); // state  for lock sidebar
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false); // state for modal premium
  const { theme } = useTheme();

  return (
    <>
      {/* Only View on Mobile screen */}
      <MobileGuard />

      {/* Content only for large screen */}
      <div
        className={`flex w-full h-screen ${
          theme === "dark" ? "bg-gray-900" : "bg-slate-100"
        } ${plusJakarta.className} overflow-hidden`}
      >
        {/* Sidebar */}
        <div className="shrink-0 h-full border-r border-gray-300 dark:border-gray-500">
          <Sidebar isLocked={isLocked} />
        </div>
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {/* HEADER / INFORMATION */}
          <header className="shrink-0 pt-4 pb-1 px-4 2xl:px-8 z-[999] bg-slate-100 dark:bg-gray-900">
            <InformationBar
              lockedValue={isLocked}
              onClick={() => setIsLocked(!isLocked)}
              modalAction={() => setIsOpenModal(!isModalOpen)}
            />
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1 overflow-y-auto p-4 2xl:p-8 space-y-8 ">
            <div className="w-full">{children}</div>
          </main>
        </div>
        {isModalOpen && <ModalPremium setIsOpenPrem={setIsOpenModal} />}
      </div>
    </>
  );
};
