import { useFloatingMenu } from "@/hooks/useFloatingMenu";
import { Bell, BellDot } from "lucide-react";
import Link from "next/link";
import { useNotification } from "../hooks/useNotifications";
import { FloatingPortal } from "@floating-ui/react";

export const Notification = () => {
  const {
    open,
    setOpen,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingMenu({ offsetPx: 16, shiftScreen: 16 });

  const { processedNotifications, unreadCount, countDisplay } =
    useNotification();

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="relative text-gray-700 dark:text-gray-300 cursor-pointer transition-all duration-200 hover:scale-110"
      >
        <Bell />
        {unreadCount > 0 && (
          <span
            className="
        absolute -top-1 -right-2 
        flex items-center justify-center
        min-w-[16px] h-4 px-1
        rounded-full 
      bg-red-600 text-white text-[10px] font-medium
        "
          >
            {countDisplay}
          </span>
        )}
      </button>
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[999]"
          >
            <div className="bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 w-60 rounded-lg shadow-xl animate-pop overflow-hidden">
              <p className="p-3 text-xs text-sky-500 text-center font-semibold">
                Notifications
              </p>
              <ul className="">
                {processedNotifications.length > 0 ? (
                  processedNotifications.map((item) => (
                    <li
                      key={item.id}
                      className="p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-103"
                    >
                      <Link
                        // href={`/mailbox/${item.id}`}
                        href={""}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`p-2 rounded-full shrink-0 ${item.isRead ? "bg-slate-100 text-slate-300 dark:bg-slate-600/20 dark:text-slate-700" : "bg-sky-100 dark:bg-slate-600/20 text-sky-500 dark:text-slate-300"}`}
                        >
                          <BellDot size={20} />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <span className="flex justify-between items-center">
                            <p
                              className={`truncate text-xs ${item.isRead ? "text-gray-300 dark:text-slate-600" : "text-gray-800 dark:text-slate-200 font-medium"}`}
                            >
                              {item.title}
                            </p>
                            <p
                              className={`text-[10px] ${item.isRead ? "text-gray-300 dark:text-slate-600" : "text-gray-500"}`}
                            >
                              {item.displayTime}
                            </p>
                          </span>
                          <p
                            className={`truncate text-xs ${item.isRead ? "text-gray-300 dark:text-slate-700" : "text-gray-500 dark:text-slate-400 font-medium"}`}
                          >
                            {item.message}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="p-8 text-center text-gray-400 text-xs">
                    No notifications yet
                  </li>
                )}
              </ul>
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
