import Link from "next/link";
import { Ellipsis, Command } from "lucide-react";
import { useFloatingMenu } from "@/hooks/useFloatingMenu";
import { FloatingPortal } from "@floating-ui/react";

interface MenuItem {
  title: string;
  to: string;
  icon: React.ReactNode;
  active: boolean;
}

export const ActionMenu = ({ items }: { items: MenuItem[] }) => {
  const {
    open,
    setOpen,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingMenu({ offsetPx: 16, shiftScreen: 16 });

  return (
    <>
      {/* Ellipsis Button */}
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="cursor-pointer"
      >
        <Ellipsis className="text-gray-500 dark:text-gray-300 hover:scale-125 transition-all duration-200" />
      </button>

      {/* POPUP MENU */}
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[998]"
          >
            <div
              className={` bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 shadow-xl p-2 rounded-md animate-pop w-40 hover:scale-103 transition-all duration-300`}
            >
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    {item.active ? (
                      /* ORIGINAL LINK WITH ACTIVE URL */
                      <Link
                        href={item.to}
                        onClick={() => setOpen(false)}
                        className="flex text-sm justify-between items-center w-full hover:bg-gray-400/20 hover:dark:bg-slate-600/20 duration-300 p-2 rounded-md text-slate-600 dark:text-slate-200"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <Command size={14} className="mr-1" />
                          {item.title.charAt(0)}
                        </div>
                      </Link>
                    ) : (
                      /* DIV WITH NONACTIVE URL */
                      <div className="flex text-sm justify-between items-center w-full p-2 rounded-md text-gray-400  dark:text-slate-700 cursor-not-allowed">
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                        <div className="flex items-center text-xs opacity-60 space-x-1">
                          <Command size={14} />
                          <span>{item.title.charAt(0)}</span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
